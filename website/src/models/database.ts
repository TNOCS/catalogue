import {IProject} from 'project';
import {ICharacteristic} from 'characteristic';

export interface IDatabase {
    /** Title as shown in the main nav bar */
    title: string;
    /** Welcome text as shown on the Welcome page */
    welcomeText: string;
    /** Description as shown on the Welcome page */
    description: string;
    /** List of tasks */
    tasks: ICharacteristic[];
    /** List of gaps */
    gaps: ICharacteristic[];
    /** List of incident types */
    incidents: ICharacteristic[];
    /** List of projects */
    projects: IProject[];
}