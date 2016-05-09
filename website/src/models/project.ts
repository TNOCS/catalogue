export interface IProject {
    index?: number;
    id: string;
    shortTitle: string;
    title: string;
    url: string;
    tagline: string;
    description: string;
    mainImageUrl: string;
}

export class Project implements IProject {
    index: number;
    id: string;
    shortTitle: string;
    title: string;
    url: string;
    tagline: string;
    description: string;
    mainImageUrl: string;
    
}