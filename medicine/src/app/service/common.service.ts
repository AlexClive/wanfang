import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        public http: HttpClient
    ) {
    }

    serveGet(api, callback) {
        this.http.get(api).subscribe(respones => {
            callback(respones);
        });
    }

    serverPost(api, data, callback) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        this.http.post(api, data, httpOptions).subscribe(respones => {
            console.log(respones);
        });
    }

}
