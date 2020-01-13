import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CommonService} from '../service/common.service';
import {ConfigService} from '../service/config.service';

declare var domainconfig;

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public sort: object[] = [{text: '全部', initial: true}, {text: '基因', initial: false}, /*{
        text: '表型',
        initial: false
    },*/ {text: '疾病', initial: false}, {text: '药物', initial: false}];
    public HOT: string[] = ['癌症', '乳腺癌', '卵巢癌', '皮肤癌', '肝癌', '宫颈癌', '', ''];
    public thematic: string[] = ['肺癌', '乳腺癌', '卵巢癌', '皮肤癌', '肝癌', '宫颈癌', '前列腺癌', '血液肿瘤'];
    public thematic1: string[] = ['胰腺癌', '肠癌', '脑肿瘤', '食管癌', '', '', '', ''];
    public search: any = {
        text: '',
        type: '',
    };
    public ISLogin = true;
    public IsHidelenovo = false;

    constructor(
        public navCtrl: NavController,
        public common: CommonService,
        public config: ConfigService
    ) {
        this.common.serveGet(this.config.doLogin, (data) => {
            console.log(data);
            if (data.IsLogin !== false) {
                this.ISLogin = false;
            }
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

    enrol() {
        window.location.href = domainconfig.domain.login + 'Account/Register?ReturnUrl=' + encodeURI(window.location.href);
    }

    Clisore(item) {
        /*选择类型*/
        for (let i = 0; i < this.sort.length; i++) {
            this.sort[i]['initial'] = false;
            if (this.sort[i]['text'] === item['text']) {
                this.sort[i]['initial'] = true;
            }
        }
        if (item !== '全部') {
            this.search.type = item;
            return;
        }
        this.search.type = '';
    }

    advancedSearch() {
        if ((this.search.text).trim() !== '') {
            this.navCtrl.navigateForward(['/result'], {queryParams: {search: JSON.stringify(this.search)}}).then(r => {
            });
            this.search.text = '';
            this.search.type = '';
            return;
        }
        this.common.presentToast('请输入搜索关键词', 'top').then(r => {
        });
    }

    lenovoFn() {
        if (this.search.text !== '') {
            // this.IsHidelenovo = true; 联想词功能暂时关闭
        }
    }

    lenovoTextFn(text) {
        this.search.text = text;
        this.IsHidelenovo = false;
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

    Gothematic(item) {
        this.navCtrl.navigateForward(['/thematic'], {
            queryParams: {
                Subject: '相关专题',
                keywords: item
            }
        }).then(r => {
        });
    }
}
