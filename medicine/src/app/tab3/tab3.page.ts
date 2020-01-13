import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {BrowserTab} from '@ionic-native/browser-tab/ngx';
import {ConfigService} from "../service/config.service";
import {CommonService} from "../service/common.service";

declare var domainconfig;
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
        public navCtrl: NavController,
        public config: ConfigService,
        public common: CommonService
    ) {
    }
    Gothematic(item) {
        this.navCtrl.navigateForward(['/thematic'], {
            queryParams: {
                Subject: '相关专题',
                keywords: item
            }
        }).then(r => {
        });
    }

    login() {
        this.common.serveGet(this.config.doLogin, (data) => {
            if (data.IsLogin !== false) {
                return false;
            } else {
                window.location.href = domainconfig.domain.login + 'Account/LogOn?ReturnUrl=' + encodeURIComponent(window.location.href);
            }
        });
    }

}
