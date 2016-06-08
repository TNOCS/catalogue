import {Endpoint, Rest}  from 'aurelia-api';
import {AuthService}     from 'aurelia-authentication';
import {inject}          from 'aurelia-framework';
import {DatabaseService} from 'services/DatabaseService';
import {IUser}           from 'models/user';
import {IDatabase}       from "models/database";
import {ICharacteristic} from 'models/characteristic';
import {IProject, IParticipant} from 'models/project';

// TODO add levels
// TOOD merge tasks/gaps/review (similar to task view)

@inject(Endpoint.of('api'), Endpoint.of('auth'), DatabaseService)
export class ProjectEdit {
    project: IProject;
    data: IDatabase;

    tasks:            ICharacteristic[] = [];
    gaps:             ICharacteristic[] = [];
    ciSectors:        ICharacteristic[] = [];
    incidents:        ICharacteristic[] = [];

    constructor(private api: Rest, private auth: AuthService, private db: DatabaseService) {}

    activate(params) {
        return this.db.database.then(db => {
            this.data = db;
            //this.project = db.projects[+params.id];
            let p = db.projects[+params.id];

            this.data.tasks.forEach(task         => task.children.forEach(c     => this.tasks.push(c)));
            this.data.incidents.forEach(incident => incident.children.forEach(c => this.incidents.push(c)));
            this.gaps      = this.data.gaps;
            this.ciSectors = this.data.ciSectors;

            // clone project, so we can cancel the edit
            this.project = {
                id:             p.id,
                index:          p.index,
                shortTitle:     p.shortTitle,
                title:          p.title,
                maturityLevel:  { id: p.maturityLevel.id },
                usabilityLevel: { id: p.usabilityLevel.id },
                intendedUsers:  p.intendedUsers,
                references:     [],
                currentUse:     p.currentUse,
                tagline:        p.tagline,
                description:    p.description,
                logo:           p.logo,
                isProduct:      p.isProject,
                isProject:      p.isProject,
                tasks:          [],
                incidents:      [],
                gaps:           [],
                ciSectors:      [],
                administration: {},
                analysts:       []
            };
            if (p.references) p.references.forEach(r => this.project.references.push(r));
            this.copyCharacteristics(p.tasks, this.tasks, this.project.tasks);
            this.copyCharacteristics(p.gaps , this.gaps , this.project.gaps );
            this.copyCharacteristics(p.incidents , this.incidents , this.project.incidents );
            this.copyCharacteristics(p.ciSectors , this.ciSectors , this.project.ciSectors );

            if (p.administration) {
                if (p.administration.duration) {
                    this.project.administration.duration = {
                        start: p.administration.duration.start,
                        end: p.administration.duration.end,
                        status: p.administration.duration.status
                    }
                }
                this.project.administration.developers = p.administration.developers;
                this.project.administration.owners     = p.administration.owners;
                this.project.administration.sponsors   = p.administration.sponsors;
                if (p.administration.coordinator) {
                    this.project.administration.coordinator = {
                        country: p.administration.coordinator.country,
                        title: p.administration.coordinator.title
                    };
                }
                if (p.administration.participants) {
                    this.project.administration.participants = [];
                    p.administration.participants.forEach(pc => {
                        this.project.administration.participants.push({
                            country: pc.country,
                            title: pc.title
                        })
                    })
                }
            }

            if (p.analysts && p.analysts.length > 0) {
                p.analysts.forEach(a => {
                    this.project.analysts.push({
                        name: a.name,
                        organisation: a.organisation,
                        reviewed: a.reviewed,
                        validationLevel: { id: a.validationLevel.id },
                        remarks: a.remarks
                    })
                });
            }

        });
    }

    /** Delete an existing participant */
    deleteParticipant(p: IParticipant) {
        if (!p) return;
        let i = this.project.administration.participants.indexOf(p);
        if (i >= 0) this.project.administration.participants.splice(i, 1);
    }

    /** Add a new participant */
    addParticipant() {
        this.project.administration.participants.push(<IParticipant>{
            title: "",
            country: "Unknown"
        });
    }

    /** Delete an existing reference */
    deleteReference(r: string) {
        if (!r) return;
        let i = this.project.references.indexOf(r);
        if (i >= 0) this.project.references.splice(i, 1);
    }

    /** Add a new reference */
    addReference() {
        this.project.references.push("");
    }

    /** Countries of the world */
    get countries() {
        const c: string[] = ["Unknown", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];;
        return c;
    }

    /** 
     * Copy characteristics from source1 (e.g. database project tasks) to the sink 
     * (e.g. local project tasks). However, since we need to reference the database, 
     * I need to copy from them.
     */
    private copyCharacteristics(src1: ICharacteristic[], src2: ICharacteristic[], sink: ICharacteristic[]) {
        if (!src1 || src1.length === 0) return;
        src1.forEach(t1 => {
            src2.some(t2 => {
                if (t1.id !== t2.id) return false;
                sink.push(t2);
                return true; 
            });
        });
    }

    // get tasks() {
    //     let t = [];
    //     this.data.tasks.forEach(task => {
    //         task.children.forEach(c => t.push(c));
    //     });
    //     return t;
    // }
}