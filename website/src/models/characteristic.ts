import {IProject} from './project';

export interface ICharacteristic {
    /** ID for referencing: should not be changed, as it may break already assigned relations */
    id: string;
    /** Display name in the GUI. */
    title?: string;
    /** Optional description in Markdown */
    description?: string;
    /** Optional children */
    children?: ICharacteristic[];
    /** Score */
    score?: ICharacteristic;
    /** Optional remarks in Markdown */
    remarks?: string;
    /** Optional relations, e.g. from tasks to gaps or vice versa */
    relations?: ICharacteristic[];
    /** Optional relation to projects, e.g. from tasks, incident types or gaps to projects */
    projects?: IProject[];
    rating?: {
        value: number;
        max: number;
    }
    
    /** Internal properties */
    isSelected?: boolean;
}