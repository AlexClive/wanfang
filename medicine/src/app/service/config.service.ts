import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public baseAddress = '';
    //public baseAddress = 'http://precisionarticle.test.med.wanfangdata.com.cn'; /*虚拟机*/
    public doLogin = this.baseAddress + '/api/user/get';
    public search = this.baseAddress + '/api/paper/search';
    public details = this.baseAddress + '/api/paper/detail';
    public refandciteyears = this.baseAddress + '/api/paper/refandciteyears';
    public getchart = this.baseAddress + '/api/general/getchart';
    public topic = this.baseAddress + '/api/topic/get';

    constructor() {
    }
}
