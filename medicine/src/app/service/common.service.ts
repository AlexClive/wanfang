import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        public http: HttpClient,
        public toastController: ToastController
    ) {
    }

    async presentToast(massage, seat) {
        const toast = await this.toastController.create({
            message: massage,
            duration: 3000,
            buttons: [
                {
                    side: 'start',
                    icon: 'alert',
                    text: '错误提示',
                }
            ],
            color: 'danger',
            position: seat
        });
        await toast.present();
    }

    serveGet(api, callback) {
        this.http.get(api).subscribe(respones => {
            callback(respones);
        }, error => {
            this.presentToast(error.message, 'bottom').then(r => {
            });
        });
    }

    serverPost(api, data, callback) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            })
        };
        this.http.post(api, data, httpOptions).subscribe(respones => {
            callback(respones);
        }, error => {
            this.presentToast(error.message, 'bottom').then(r => {
            });
        });
    }

}
