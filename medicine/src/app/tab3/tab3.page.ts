import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {BrowserTab} from '@ionic-native/browser-tab/ngx';

declare var AlloyCrop;

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    public thematic = {
        arr1: ['肺癌', '乳腺癌', '卵巢癌'],
        arr2: ['皮肤癌', '肝癌', '宫颈癌'],
        arr3: ['前列腺癌', '血液肿瘤', '胰腺癌'],
        arr4: ['肠癌', '脑肿瘤', '食管癌']
    };

    constructor(
        public browser: BrowserTab,
        public navCtrl: NavController
    ) {
        browser.isAvailable().then(isAvailable => {
            if (isAvailable) {
                browser.openUrl('http://temp2.med.wanfangdata.com.cn/web/viewer.html?file=/Pdf/251%e6%89%8b%e8%b6%b3%e5%8f%a3%e7%97%85%e4%b8%b4%e5%ba%8a%e8%b7%af%e5%be%84%ef%bc%882016%e5%b9%b4%e7%89%88%ef%bc%89.pdf');
            } else {
                console.log('error');
            }
        });
    }

    Goresult(item) {
        this.navCtrl.navigateForward(['/result'], {
            queryParams: {
                search: JSON.stringify({
                    text: item,
                    type: {text: '全部', initial: true}
                })
            }
        }).then(r => {
        });
    }


}
