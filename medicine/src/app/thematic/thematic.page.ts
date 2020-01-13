import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {CommonService} from "../service/common.service";
import {ConfigService} from "../service/config.service";
// @ts-ignore
const viewChild = ViewChild(IonContent);

@Component({
    selector: 'app-thematic',
    templateUrl: './thematic.page.html',
    styleUrls: ['./thematic.page.scss'],
})
export class ThematicPage implements OnInit {
    @viewChild content: IonContent;
    public tabsList: any = {
        title: '',
        EnName: '',
        list: [],
        IsActive: ''
    };
    public margin: any = 0;
    public width: number = 0;
    public display: any = 'none';
    public ListOmimHgnc: any[] = [];
    public ListHpoHgnc: any[] = [];
    public ListShareDisease: any[] = [];
    public moreData: any[] = [{text: '遗传基因', status: false, num: 5}, {
        text: '相关基因',
        status: false,
        num: 5
    }, {text: '共享基因疾病', status: false, num: 5}];

    constructor(
        public navCtrl: NavController,
        public activatedRoute: ActivatedRoute,
        public common: CommonService,
        public config: ConfigService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data: any) => {
            let keywords = data.keywords;
            this.tabsList.title = data.keywords;
            this.tabsList.list = [];
            this.margin = 0;
            this.width = 0;
            this.dataServe(keywords, '');
        });
    }

    dataServe(keywords, ID) {
        this.common.serverPost(this.config.topic + "?name=" + encodeURIComponent(keywords) + "&id=" + ID, {}, (data) => {
            this.content.scrollToTop(0).then(r => {
            });
            if (this.tabsList.list.length === 0) {
                for (let i = 0; i < data.Data.ListJzDisease.length; i++) {
                    this.tabsList.list.push({
                        ID: data.Data.ListJzDisease[i].Id,
                        title: data.Data.ListJzDisease[i].PhenotypeName
                    });
                }
                for (let i = 0; i < this.tabsList.list.length; i++) {
                    this.width += Number((this.tabsList.list[i]["title"].length) * 16) + 27;
                }
                this.tabsList.IsActive = this.tabsList.list[0];
                this.tabsList.EnName = data.Data.ListJzDisease[0]["EnName"];
            }

            this.ListOmimHgnc = data.Data.ListOmimHgnc;
            this.ListHpoHgnc = data.Data.ListHpoHgnc;
            this.ListShareDisease = data.Data.ListShareDisease;
            this.display = 'block';

        });
    }

    tansFn(item) {
        this.tabsList.IsActive = item;
        this.dataServe(this.tabsList.title, item.ID);
    }

    leftFn() {
        if (this.margin <= 0) {
            this.margin = 0;
            return false;
        }
        this.margin = this.margin - document.getElementsByClassName('item_tabs')[0].clientWidth / 2;
        if (this.margin <= 36) {
            this.margin = 0;
        }
    }

    rightFn() {
        if (document.getElementsByClassName('item_tabs')[0].clientWidth >= this.width - this.margin) {
            return false;
        } else {
            this.margin = this.margin + document.getElementsByClassName('item_tabs')[0].clientWidth / 2;
        }
    }

    more(title) {
        console.log(this.moreData);
        for (let i = 0; i < this.moreData.length; i++) {
            if (this.moreData[i]['text'] === title) {
                this.moreData[i]['status'] = !this.moreData[i]['status'];
                if (this.moreData[i]['status'] === true) {
                    this.moreData[i]['num'] = 25;
                } else {
                    this.moreData[i]['num'] = 5;
                }
            }
        }

    }

    literature(item, txt) {
        let consequence = {};
        if (txt === '相关基因') {
            consequence = {
                qualification: [{
                    logic: '与',
                    field: '基因',
                    input: item.Id,
                    fuzzy: '精确'
                }],
                time: {start: '开始', end: '结束'}
            };
        } else {
            consequence = {
                qualification: [{
                    logic: '与',
                    field: '疾病',
                    input: item.Topic,
                    fuzzy: '模糊'
                }],
                time: {start: '开始', end: '结束'}
            };
        }
        let effect = JSON.stringify(consequence);
        this.navCtrl.navigateForward(['/result'], {queryParams: {'expressionSearch': effect}}).then(r => {
        });
    }

    Godetails(title) {
        /*       if (title === '相关基因') {
                   this.navCtrl.navigateForward(['/disease'], {queryParams: {'expressionSearch': ''}}).then(r => {
                   });
               } else if (title === '相关疾病') {
                   this.navCtrl.navigateForward(['/disease'], {queryParams: {'expressionSearch': ''}}).then(r => {
                   });
               } else if (title === '相关药物') {
                   this.navCtrl.navigateForward(['/disease'], {queryParams: {'expressionSearch': ''}}).then(r => {
                   });
               }*/
    }

    Creator(item) {
        let text = '';
        if (item !== null) {
            if (typeof (item) !== 'string') {
                let len = item.length <= 2 ? item.length : 2;
                for (let i = 0; i < len; i++) {
                    if (item[i].indexOf('$') !== -1) {
                        text += item[i].split('$')[1];
                        if (i < item.length - 1) {
                            text += '；';
                        }
                    } else {
                        text += item[i];
                    }

                }
            } else {
                if (item.indexOf('$') !== -1) {
                    text = item.split('$')[1];
                } else {
                    text = item;
                }
            }
        }

        return text;
    }

}
