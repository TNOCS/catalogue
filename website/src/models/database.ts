import {IProject} from 'project';
import {ICharacteristic} from 'characteristic';

export interface IDatabase {
    /** Title as shown in the main nav bar */
    title: string;
    /** Welcome text as shown on the Welcome page */
    welcomeText: string;
    /** Description as shown on the Welcome page */
    description: string;
    /** List of usability scales */
    usabilityLevels: ICharacteristic[];
    /** List of maturity scales */
    maturityLevels: ICharacteristic[];
    /** List of validation scales */
    validationLevels: ICharacteristic[];
    /** List of CI sectors */
    ciSectors: ICharacteristic[];
    /** List of incident types */
    incidents: ICharacteristic[];
    /** List of tasks */
    tasks: ICharacteristic[];
    /** List of gaps */
    gaps: ICharacteristic[];
    /** Mapping from task ID to one or more gap IDs */
    task2gaps: { [taskId: string]: string[] };
    /** List of projects */
    projects: IProject[];
}