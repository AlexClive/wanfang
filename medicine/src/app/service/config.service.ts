import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public baseAddress = 'http://127.0.0.1:3000';
    public doLogin = this.baseAddress + '/doLogin';

    constructor() {
    }
}
