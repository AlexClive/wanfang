import {Component} from '@angular/core';
import {BrowserTab} from '@ionic-native/browser-tab/ngx';

declare var AlloyCrop;

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


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


}
