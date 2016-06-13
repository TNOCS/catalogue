import {ICharacteristic} from './characteristic';

export class ProjectFilterConfiguration {
    /** Search the short title, title, and description (and remarks) to contain each keyword */
    text:            string;
    isProject:       boolean;
    isProduct:       boolean;
    tasks:           ICharacteristic[] = [];
    incidents:       ICharacteristic[] = [];
    ciSectors:       ICharacteristic[] = [];
    maturityLevel:   ICharacteristic[];
    usabilityLevel:  ICharacteristic[];
    validationLevel: ICharacteristic[];
}
