import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import {IDatabase} from "../models/database"

@autoinject
export class DatabaseService {
    private data: IDatabase = <IDatabase>{};

    database: Promise<IDatabase>;

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('data/');
        });
        
        this.database = this.http.fetch('database.json')
            .then(response => response.json())
            .then(database => this.data = database);
    }
}