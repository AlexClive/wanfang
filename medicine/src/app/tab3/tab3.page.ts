import {Component} from '@angular/core';
import {BrowserTab} from '@ionic-native/browser-tab/ngx';

declare var AlloyCrop;

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    cropPicture = 'assets/icon/favicon.png';

    constructor(
        public browser: BrowserTab
    ) {
        browser.isAvailable().then(isAvailable => {
            if (isAvailable) {
                browser.openUrl('http://temp2.med.wanfangdata.com.cn/web/viewer.html?file=/Pdf/251%e6%89%8b%e8%b6%b3%e5%8f%a3%e7%97%85%e4%b8%b4%e5%ba%8a%e8%b7%af%e5%be%84%ef%bc%882016%e5%b9%b4%e7%89%88%ef%bc%89.pdf');
            } else {
                console.log('error');
            }
        });
    }

    // 裁剪图片操作
    crop() {
        /*  //https://github.com/AlloyTeam/AlloyCrop*/
        new AlloyCrop({
            image_src: this.cropPicture,
            circle: true,   // 是否是圆形剪切，false为方形
            width: 320,     // 选区的宽
            height: 320,    // 选区的高
            output: 1,      // 输出的倍率。比如如果output为2，选区的宽300，选区的高100，输出的图像的分辨率为 (2×300，2×100）
            MaxZOOM: 1,
            imageBackgroundBorderWidth: 15,
            ok: (base64, canvas) => {   // 确定裁剪操作
                this.cropPicture = base64;
            },
            cancel: () => {     // 取消裁剪操作
            },
            ok_text: '确定',
            cancel_text: '取消'
        });
    }
}
