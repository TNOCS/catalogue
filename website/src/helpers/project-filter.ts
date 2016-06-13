import {IProject}                   from '../models/project';
import {ICharacteristic}            from '../models/characteristic';

/** Filter projects by looking for projects that support a certain type (incident/task/gap/ci). */
export class ProjectFilterTypeValueConverter {
    toView(projects: IProject[], type: 'incidents' | 'ciSectors', t: ICharacteristic[]) {
        if (!projects || !t || t.length === 0) return projects;

        let ids: string[] = [];
        t.forEach(c => ids.push(c.id));

        let filteredProjects: IProject[] = [];
        projects.forEach(project => {
            if (!project.hasOwnProperty(type) || !project[type]) return;
            let prop: ICharacteristic[] = project[type];
            let add = true;
            ids.some(id => {
                let f = prop.filter(c => { return c.id === id; });
                if (f.length > 0) return false;
                add = false;
                return true;
            });
            if (add) filteredProjects.push(project);
        });

        return filteredProjects;
    }
}

/** Filter projects by looking for product or projects. */
export class ProjectFilterProductValueConverter {
    toView(projects: IProject[], isProduct?: boolean, isProject?: boolean) {
        if (!(isProduct || isProject) || !projects) return projects;

        let filteredProjects: IProject[] = [];
        projects.forEach(project => {
            let add = true;
            if (add && isProduct && !project.isProduct) {
                add = false;
            }
            if (add && isProject && !project.isProject) {
                add = false;
            }
            if (add) filteredProjects.push(project);
        });

        return filteredProjects;
    }
}

/** Filter projects by looking for certain text. */
export class ProjectFilterTextValueConverter {
    toView(projects: IProject[], keywords?: string) {
        if (!keywords || !projects) return projects;

        let filteredProjects: IProject[] = [];
        projects.forEach(project => {
            let add = true;
            if (keywords) {
                let words = keywords.split(' ');
                words.some(w => {
                    if (ProjectFilterTextValueConverter.containsWord(project.shortTitle, w) 
                        || ProjectFilterTextValueConverter.containsWord(project.title, w)
                        || ProjectFilterTextValueConverter.containsWord(project.description, w)
                    ) return false;
                    add = false;
                    return true;
                });
            }
            if (add) filteredProjects.push(project);
        });

        return filteredProjects;
    }

    private static containsWord(str: string, word: string) {
        if (!str || !word) return false;
        return str.toLowerCase().indexOf(word.toLowerCase()) >= 0;
    }
}


/** Filter projects by looking for certain characteristics. */
export class ProjectFilterCharacteristicValueConverter {
    toView(projects: IProject[], type: 'usability' | 'maturity' | 'validation', c?: ICharacteristic) {
        if (!c || !projects) return projects;

        let filteredProjects: IProject[] = [];
        projects.forEach(project => {
            let add = false;
            switch(type) {
                case 'usability':
                    if (project.usabilityLevel && project.usabilityLevel.rating && project.usabilityLevel.rating.value >= c.rating.value) add = true;
                    break;
                case 'maturity':
                    if (project.maturityLevel && project.maturityLevel.rating && project.maturityLevel.rating.value >= c.rating.value) add = true;
                    break;
                case 'validation':
                    if (project.analysts) {
                        project.analysts.some(a => {
                            if (a.validationLevel && a.validationLevel.rating && a.validationLevel.rating.value >= c.rating.value) {
                                add = true;
                                return true;
                            } else {
                                return false;
                            }
                        });
                    }
                    break;
            }
            if (add) filteredProjects.push(project);
        });

        return filteredProjects;
    }
}

