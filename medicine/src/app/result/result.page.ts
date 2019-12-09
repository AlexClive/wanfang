import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from "../service/common.service";
import {ConfigService} from "../service/config.service";

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
    public sort: object[] = [{text: '全部', initial: true}, {text: '基因', initial: false}, {
        text: '表型',
        initial: false
    }, {text: '疾病', initial: false}, {text: '药物', initial: false}];
    public search: any = {
        text: '',
        type: '',
    };
    public searchobj: any = {};
    public navLeftDate: object[] = [];
    public navRightDate: object[] = [];
    public Initsearch_text: string = '';
    public search_text: string = '';
    public dateOfPublish: string = '';
    public search_Num: number = 0;
    public AmountSelect = false;
    public AmountTextArry: number[] = [10, 20, 30, 40, 50];
    public AmountText: number = 10;
    public pageBoo = false;
    public pageNum: number = 1;
    public contentDate: any = {
        ListItem: [],
        LeftData: [],
        navRightDate: []
    };
    public contentMore: any = {
        leftArry: [
            3, 3, 3, 3, 3, 3
        ],
        leftStr: ['更多>>', '更多>>', '更多>>', '更多>>', '更多>>', '更多>>'],
        RightArry: [3, 3, 3, 3],
        RightStr: ['更多>>', '更多>>', '更多>>', '更多>>']
    };
    public pageNumArry: number[] = [];
    public leftArryActive = [];
    public Parametric = {
        sort: '',
        AmountText: ''
    };

    public form = {
        entry: [],
        isChecked: false,
        num: 0
    };

    public height: any;

    constructor(
        public route: Router,
        public activatedRoute: ActivatedRoute,
        public navCtrl: NavController,
        public common: CommonService,
        public config: ConfigService
    ) {
        if (document.body.clientHeight > 788) {
            this.height = document.body.clientHeight - 386 - 179 - 120 + 'px';
        }
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data: any) => {
            if (data.search === undefined) {
                const expressionSearch = JSON.parse(data.expressionSearch);
                this.search_text = '';
                for (let i = 0; i < expressionSearch.qualification.length; i++) {
                    if (expressionSearch.qualification[i].input !== '') {
                        if (expressionSearch.qualification[i].field !== '全部字段') {
                            if (i !== 0) {
                                switch (expressionSearch.qualification[i].logic) {
                                    case '与':
                                        this.search_text += ' AND ';
                                        break;
                                    case '或':
                                        this.search_text += ' OR ';
                                        break;
                                    case '非':
                                        this.search_text += ' NOT ';
                                        break;
                                }
                            }
                            this.search_text += '(' + expressionSearch.qualification[i].field + '=';
                        } else {
                            this.search_text += '(';
                        }
                        this.search_text += expressionSearch.qualification[i].input + ')';
                    }
                }
                if (expressionSearch.time.start !== '开始' || expressionSearch.time.end !== '结束') {
                    this.dateOfPublish = '&出版时间=' + expressionSearch.time.start + '-' + expressionSearch.time.end;
                }
            } else {
                this.search = JSON.parse(data.search);  /*//此时的search存的就是上个页面传过来的值*/
                this.Clisore(JSON.parse(data.search).type);
                let type = JSON.parse(data.search).type;
                if (type !== '' && type.text !== '全部') {
                    this.search_text = '(' + type.text + '=' + JSON.parse(data.search).text + ')';
                } else {
                    this.search_text = JSON.parse(data.search).text;
                }
            }
            this.Initsearch_text = this.search_text;
            this.dataServe(this.search_text + this.dateOfPublish);
        });
    }

    dataServe(Value) {
        this.common.serverPost(this.config.search + '?q=' + Value, {}, (data) => {
            console.log(data.Massage)
            if (data.Massage === null) {
                if (data.Data.ListItem.length > 0) {
                    this.contentDate.ListItem = data.Data.ListItem;
                    this.search_Num = data.Data.TotalCount;
                    this.pageNumArry = [];
                    for (let i = 0; i < Math.ceil(this.search_Num / this.AmountText); i++) {
                        this.pageNumArry.push(i + 1);
                    }
                    let leftBtn = 0;
                    this.contentDate.LeftData = [];
                    this.leftArryActive = [];
                    this.contentDate.navRightDate = [];
                    this.form.entry = [];
                    for (let key in data.Data) {
                        // tslint:disable-next-line:max-line-length
                        if (key === 'DBIDCluster' || key === 'CLCShortCluster' || key === 'DateCluster' || key === 'PeriodicalCluster' || key === 'CreatorCluster' || key === 'OrganCluster') {
                            this.contentDate.LeftData.push(data.Data[key]);
                            this.leftArryActive.push(leftBtn++);
                        } else if (key !== 'ListItem' && key !== 'TotalCount' && key !== 'Pager') {
                            this.contentDate.navRightDate.push(data.Data[key]);
                        }
                    }
                    for (let i = 0; i < this.contentDate.ListItem.length; i++) {
                        this.form.entry.push(false);
                    }
                } else {
                    this.common.presentToast('抱歉系统没有检索到相关记录！', 'top');
                    this.contentDate.ListItem = [];
                    this.contentDate.LeftData = [];
                    this.leftArryActive = [];
                    this.contentDate.navRightDate = [];
                    this.form.entry = [];
                }

            } else {
                this.common.presentToast(data.Massage, 'top');
                this.contentDate.ListItem = [];
                this.contentDate.LeftData = [];
                this.leftArryActive = [];
                this.contentDate.navRightDate = [];
                this.form.entry = [];
            }

        });
    }

    Clisore(item) {
        /*选择类型*/
        if (item !== '') {
            for (let i = 0; i < this.sort.length; i++) {
                this.sort[i]['initial'] = false;
                if (this.sort[i]['text'] === item['text']) {
                    this.sort[i]['initial'] = true;
                    if (this.sort[i]['text'] !== '全部') {
                        this.search.type = this.sort[i];
                    } else {
                        this.search.type = '';
                    }
                }
            }
        }

    }

    Amount() {
        this.AmountSelect = !this.AmountSelect;
    }

    AmountSelectText(text, $event) {
        this.AmountText = text;
        this.AmountSelect = false;
        if (this.AmountText != 10) {
            this.Parametric.AmountText = '&n=' + this.AmountText;
        } else {
            this.Parametric.AmountText = '';
        }
        this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.AmountText + this.Parametric.sort);
        $event.stopPropagation();
    }

    pageFn() {
        this.pageBoo = !this.pageBoo;
    }

    pageGo(num, $event) {
        this.pageNum = num;
        this.pageBoo = false;
        this.dataServe(this.search_text + this.dateOfPublish + '&p=' + num);
        $event.stopPropagation();
    }

    leftCut() {
        if (this.pageNum !== 1) {
            this.pageNum--;
            this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum);
        }
    }

    pageNumGO(num) {
        this.pageNum = num;
        this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum + this.Parametric.AmountText + this.Parametric.sort);
    }

    rightAdd() {
        if (this.pageNum > this.search_Num) {
            this.pageNum++;
            this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum);
        }
    }

    GOAbout() {
        this.navCtrl.navigateForward(['/about'], {queryParams: {search: JSON.stringify(this.search)}}).then(r => {
        });
    }

    advancedSearch() {
        if (this.search.text !== '') {
            this.navCtrl.navigateForward(['/result'], {queryParams: {search: JSON.stringify(this.search)}}).then(r => {
            });
            return;
        }
        this.common.presentToast('请输入搜索关键词', 'top').then(r => {
        });
    }

    AbstractFn(text) {
        if (text.length) {
            text = text.substring(0, 200) + '……';
        }
        return text;
    }

    Creator(item) {
        var text = '';
        for (let i = 0; i < item.length; i++) {
            text += item[i].split('$')[1];
            if (i < item.length - 1) {
                text += '；';
            }
        }
        return text;
    }

    leftSelect(num, index, title, item) {
        let make = 0;
        this.search_text = this.Initsearch_text;
        for (let i = 0; i < this.leftArryActive.length; i++) {
            if (isNaN(this.leftArryActive[i])) {
                let oldNum = this.leftArryActive[i].substring(0, this.leftArryActive[i].indexOf('-'));
                if (Number(oldNum) === num) {
                    this.leftArryActive[i] = num + '-' + index;
                    make = 1;
                }
            }
        }

        if (make === 0) {
            this.leftArryActive[num] = num + '-' + index;
        }
        if (title !== '出版时间') {
            let Value = '&' + title + '=' + item.Text;
            console.log(this.searchobj);
            this.searchobj[title] = Value;
        } else {
            this.dateOfPublish = '&' + title + '=' + item.Key;
        }
        for (let key in this.searchobj) {
            this.search_text += this.searchobj[key];
        }
        this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText);
    }

    itemCheck(m, index) {
        let makeIsChecked = this.form.num;

        for (let i = 0; i < this.form.entry.length; i++) {
            if (i === index) {
                if (m === false) {
                    this.form.entry[i] = false;
                    ++makeIsChecked;
                } else {
                    this.form.entry[i] = true;
                    --makeIsChecked;
                }
            }
        }
        if (makeIsChecked === this.form.entry.length) {
            this.form.isChecked = true;
        } else {
            this.form.isChecked = false;
        }
        this.form.num = makeIsChecked;
    }

    allIsCheck() {
        for (let i = 0; i < this.form.entry.length; i++) {
            if (this.form.isChecked === false) {
                this.form.entry[i] = true;
                this.form.num = this.form.entry.length;
            } else {
                this.form.entry[i] = false;
                this.form.num = 0;
            }
        }
    }

    more(index, num) {
        if (this.contentMore.leftArry[num] !== index) {
            this.contentMore.leftArry[num] = index;
            this.contentMore.leftStr[num] = '收起<<';
        } else {
            this.contentMore.leftArry[num] = 3;
            this.contentMore.leftStr[num] = '更多>>';
        }
    }

    moreRight(index, num) {
        if (this.contentMore.RightArry[num] !== index) {
            this.contentMore.RightArry[num] = index;
            this.contentMore.RightStr[num] = '收起<<';
        } else {
            this.contentMore.RightArry[num] = 3;
            this.contentMore.RightStr[num] = '更多>>';
        }
    }

    sortGo(i) {
        if (Number(i) === 0) {
            this.Parametric['sort'] = '&sort=Date desc';
            this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText);
        } else {
            this.Parametric['sort'] = '';
            this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText);
        }
    }
}
