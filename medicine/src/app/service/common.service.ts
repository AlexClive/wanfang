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
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if (isIE11) {
            alert('请输入搜索关键词');
        } else {
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
    }

    serveGet(api, callback) {
        this.http.get(api).subscribe(respones => {
            callback(respones);
        }, error => {
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
        });
    }

}
