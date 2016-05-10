import {ICharacteristic} from 'characteristic';

export interface IProject {
    id: string;
    index?: number;
    shortTitle?: string;
    title?: string;
    url?: string;
    tagline?: string;
    description?: string;
    logo?: string;

    tasks?: ICharacteristic[];
    incidents?: ICharacteristic[];
    gaps?: ICharacteristic[];
    
    /** Id of the usability level/scale */
    usabilityLevel?: ICharacteristic;
    /** Maturity level/scale */
    maturityLevel?: ICharacteristic;
    /** Critical sectors */
    ciSectors?: ICharacteristic[];
    administration?: {
        duration?: {
            start: Date;
            end?: Date;
            status: string;
        };
        developers?: string;
        owners?: string;
        sponsors?: string;
        projectType?: string;
        coordinator?: string;
        participants?: string[];        
    };
    analysts?: {
        name?: string;
        organisation?: string;
        reviewed?: Date;
        /** Validation level/scale */
        validationLevel?: ICharacteristic;
        remarks?: string;
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