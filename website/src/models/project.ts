import {ICharacteristic} from './characteristic';

export interface IParticipant {
    title?:   string;
    country?: string;
}

export interface Reference {
    title?: string;
    url?:   string;
}

export interface IProject {
    id:             string;
    shortTitle?:    string;
    title?:         string;
    intendedUsers?: string;
    references?:    Reference[];
    currentUse?:    string;
    tagline?:       string;
    description?:   string;
    logo?:          string;
    isProject?:     boolean;
    isProduct?:     boolean;
    tasks?:         ICharacteristic[];
    incidents?:     ICharacteristic[];
    gaps?:          ICharacteristic[];
    /** Critical sectors */
    ciSectors?:     ICharacteristic[];
    /** Id of the usability level/scale */
    usabilityLevel?: ICharacteristic;
    /** Maturity level/scale */
    maturityLevel?: ICharacteristic;
    administration?: {
        duration?: {
            start?:  Date;
            end?:    Date;
            status?: string;
        };
        developers?:   string;
        owners?:       string;
        sponsors?:     string;
        projectType?:  string;
        coordinator?:  IParticipant;
        participants?: IParticipant[];        
    };
    analysts?: {
        name?:            string;
        organisation?:    string;
        reviewed?:        Date;
        /** Validation level/scale */
        validationLevel?: ICharacteristic;
        remarks?:         string;
    }[];
}

// export class Project implements IProject {
//     index: number;
//     id: string;
//     shortTitle: string;
//     title: string;
//     url: string;
//     tagline: string;
//     description: string;
//     logo: string;
    
//     /** For who is it intended */
//     intendedUsers: string;
//     /** List of URLs related to the project */
//     references: string[];

//     taskIds: string[];
//     incidentIds: string[];
//     tasks: ICharacteristic[];
//     incidents: ICharacteristic[];
//     gaps: ICharacteristic[];
// }