export interface ICharacteristic {
    /** ID for referencing: should not be changed, as it may break already assigned relations */
    id: string;
    /** Display name in the GUI. */
    title: string;
    /** Optional description in Markdown */
    description?: string;
    /** Optional children */
    children?: ICharacteristic[];
    /** Optional remarks in Markdown */
    remarks?: string[];
}