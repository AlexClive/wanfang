import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public baseAddress = 'http://localhost:32542';
    public doLogin = this.baseAddress + '/api/search/get';
    public search = this.baseAddress + '/api/paper/search';
    public details = this.baseAddress + '/api/paper/detail';

    constructor() {
    }
}
