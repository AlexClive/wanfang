import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from "../service/common.service";
import {ConfigService} from "../service/config.service";
import {IonInfiniteScroll} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
    // @ts-ignore
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
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
    public leftArryActive: any = [0, 1, 2, 3, 4, 5, 6, 7];
    public Parametric = {
        sort: '',
        AmountText: ''
    };

    public form = {
        entry: [],
        isChecked: false,
        num: 0
    };

    public time = {
        start: '1998',
        end: new Date().getFullYear()
    }

    public export = false;
    public isPC = false;
    public typeClass: number = 0;
    public eventLoadFn: any;

    constructor(
        public route: Router,
        public activatedRoute: ActivatedRoute,
        public navCtrl: NavController,
        public common: CommonService,
        public config: ConfigService,
        public actionSheetController: ActionSheetController
    ) {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            this.isPC = true;
        } else {
            this.isPC = false;
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
                        if (expressionSearch.qualification[i].fuzzy === "精确") {
                            this.search_text += '"' + expressionSearch.qualification[i].input + '")';
                        } else {
                            this.search_text += expressionSearch.qualification[i].input + ')';
                        }

                    }
                }
                if (expressionSearch.time.start !== '开始' || expressionSearch.time.end !== '结束') {
                    this.dateOfPublish = '&出版时间_f=' + expressionSearch.time.start + '-' + expressionSearch.time.end;
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
            this.dataServe(this.search_text + this.dateOfPublish, undefined);
        });
    }

    dataServe(Value, genre) {
        this.form.entry = [];
        this.form.isChecked = false;
        this.form.num = 0;
        this.common.serverPost(this.config.search + '?q=' + encodeURIComponent(Value), {}, (data) => {
            if (data.Massage === null) {
                if (data.Data.ListItem.length > 0) {
                    if (genre === undefined) {
                        this.contentDate.ListItem = data.Data.ListItem;
                        this.search_Num = data.Data.TotalCount;
                        this.pageNumArry = [];
                        for (let i = 0; i < Math.ceil(this.search_Num / this.AmountText); i++) {
                            this.pageNumArry.push(i + 1);
                        }
                        this.contentDate.LeftData = [];
                        this.contentDate.navRightDate = [];
                        this.form.entry = [];
                    } else {
                        this.contentDate.ListItem = this.contentDate.ListItem.concat(data.Data.ListItem);
                        this.search_Num = data.Data.TotalCount;
                        for (let i = 0; i < Math.ceil(this.search_Num / this.AmountText); i++) {
                            this.pageNumArry.push(i + 1);
                        }
                        if (data.Data.ListItem.length < 10) {
                            genre.target.disabled = true;
                        }
                    }
                    for (let key in data.Data) {
                        // tslint:disable-next-line:max-line-length
                        if (key === 'DBIDCluster' || key === 'CLCShortCluster' || key === 'DateCluster' || key === 'PeriodicalCluster' || key === 'CreatorCluster' || key === 'OrganCluster') {
                            this.contentDate.LeftData.push(data.Data[key]);
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
                    this.contentDate.navRightDate = [];
                    this.form.entry = [];
                    this.search_Num = 0;
                }

            } else {
                this.common.presentToast(data.Massage, 'top');
                this.contentDate.ListItem = [];
                this.contentDate.LeftData = [];
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
        this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.AmountText + this.Parametric.sort, undefined);
        $event.stopPropagation();
    }

    pageFn() {
        this.pageBoo = !this.pageBoo;
    }

    pageGo(num, $event) {
        this.pageNum = num;
        this.pageBoo = false;
        this.dataServe(this.search_text + this.dateOfPublish + '&p=' + num, undefined);
        $event.stopPropagation();
    }

    leftCut() {
        if (this.pageNum !== 1) {
            this.pageNum--;
            this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum, undefined);
        }
    }

    pageNumGO(num) {
        this.pageNum = num;
        this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum + this.Parametric.AmountText + this.Parametric.sort, undefined);
    }

    rightAdd() {
        if (this.pageNum > this.search_Num - 10) {
            this.pageNum++;
            this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum, undefined);
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
        //判读是否存在
        if (this.dateOfPublish.indexOf(title) === -1) {
            this.dateOfPublish += '&' + title + '_f=' + item.Key;
        } else {
            let intermediateProcessing = this.dateOfPublish.split('&');
            this.dateOfPublish = '';
            for (var i = 0; i < intermediateProcessing.length; i++) {
                if (intermediateProcessing[i].indexOf(title) === -1 && intermediateProcessing[i] !== '') {
                    this.dateOfPublish += '&' + intermediateProcessing[i];
                }
            }
            this.dateOfPublish += '&' + title + '_f=' + item.Key;
        }
        for (let key in this.searchobj) {
            this.search_text += this.searchobj[key];
        }
        this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText, undefined);
    }

    selectionPeriod(num, title) {
        //重置选项
        this.leftArryActive[num] = num;
        let intermediateProcessing = this.dateOfPublish.split('&');
        this.dateOfPublish = '';
        for (var i = 0; i < intermediateProcessing.length; i++) {
            if (intermediateProcessing[i].indexOf(title) === -1 && intermediateProcessing[i] !== '') {
                this.dateOfPublish += '&' + intermediateProcessing[i];
            }
        }
        this.dateOfPublish += '&' + title + '_f=' + this.time.start + '-' + this.time.end;
        for (let key in this.searchobj) {
            this.search_text += this.searchobj[key];
        }
        this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText, undefined);
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
            this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText, undefined);
        } else {
            this.Parametric['sort'] = '';
            this.dataServe(this.search_text + this.dateOfPublish + this.Parametric.sort + this.Parametric.AmountText, undefined);
        }
    }

    typeFn(text) {
        let str = ''
        if (text !== 'JZ_WF_QK') {
            str = '外文期刊';
        } else {
            str = '中文期刊';
        }
        return str;
    }

    loadData(event) {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            if (this.pageNum === 0) {
                ++this.pageNum;
            } else {
                this.pageNum = 2;
            }
            this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum, event);
            event.target.complete();
        } else {
            event.target.disabled = true;
        }

        this.eventLoadFn = event;
    }

    doRefresh(event) {
        this.pageNum = 1;
        this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum, undefined);
        setTimeout(() => {
            event.target.complete();
        }, 2000);

        this.eventLoadFn.target.disabled = false;
    }

    async presentActionSheet(title) {
        const actionSheet = await this.actionSheetController.create({
            header: '分享',
            buttons: [{
                text: 'QQ好友',
                handler: () => {
                    console.log('QQ好友');
                    var test = window.location.href;
                    let p = {
                        url: test,/*获取URL，可加上来自分享到QQ标识，方便统计*/
                        desc: '精准肿瘤知识库', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
                        title: title,/*分享标题(可选)*/
                        summary: title,/*分享描述(可选)*/
                        pics: 'http://med.wanfangdata.com.cn/Content/Images/rwd/hf/logo-MED-lg-top.png',/*分享图片(可选)*/
                        flash: '', /*视频地址(可选)*/
                        //commonClient : true, /*客户端嵌入标志*/
                        site: '精准肿瘤知识库'/*分享来源 (可选) ，如：QQ分享*/
                    };
                    let s = [];
                    for (let i in p) {
                        s.push(i + '=' + encodeURIComponent(p[i] || ''));
                    }
                    let target_url = "http://connect.qq.com/widget/shareqq/iframe_index.html?" + s.join('&');
                    window.open(target_url, 'qq',
                        'height=520, width=720');
                }
            }, {
                text: 'QQ空间',
                handler: () => {
                    console.log('QQ空间');
                    let test = window.location.href;
                    let p = {
                        url: test,
                        showcount: '1',/*是否显示分享总数,显示：'1'，不显示：'0' */
                        desc: title,/*默认分享理由(可选)*/
                        summary: title,/*分享摘要(可选)*/
                        title: title,/*分享标题(可选)*/
                        site: title,/*分享来源 如：腾讯网(可选)summary*/
                        pics: 'http://med.wanfangdata.com.cn/Content/Images/rwd/hf/logo-MED-lg-top.png', /*分享图片的路径(可选)*/
                        style: '101',
                        width: 199,
                        height: 30
                    };
                    console.log(p);
                    let s = [];
                    for (var i in p) {
                        s.push(i + '=' + encodeURIComponent(p[i] || ''));
                    }
                    let target_url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&');
                    window.open(target_url, 'qZone',
                        'height=430, width=400');
                }
            }, {
                text: '朋友圈',
                handler: () => {
                    console.log('朋友圈');
                    var target_url = "http://qr.liantu.com/api.php?text=" + window.location.href;
                    window.open(target_url, 'weixin',
                        'height=320, width=320');
                }
            }, {
                text: '微博',
                handler: () => {
                    console.log('微博');
                    var test = window.location.href;
                    var param = {
                        url: test,
                        type: '3',
                        count: '1',
                        /** 是否显示分享数，1显示(可选)*/
                        appkey: title,
                        /** 您申请的应用appkey,显示分享来源(可选)*/
                        title: title,
                        /** 分享的文字内容(可选，默认为所在页面的title)*/
                        pic: 'http://med.wanfangdata.com.cn/Content/Images/rwd/hf/logo-MED-lg-top.png',
                        /**分享图片的路径(可选)*/ ralateUid: '',
                        /**关联用户的UID，分享微博会@该用户(可选)*/
                        rnd: new Date().valueOf()
                    }
                    var temp = [];
                    for (var p in param) {
                        temp.push(p + '=' + encodeURIComponent(param[p] || ''))
                    }
                    var target_url = "http://service.weibo.com/share/share.php?" + temp.join('&');
                    window.open(target_url, 'sinaweibo',
                        'height=430, width=400');
                }
            }, {
                text: '取消',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }


    AllExportFn(Class) {
        //批量导出
        if (this.form.num === 0) {
            this.common.presentToast('没有选中导出记录', top);
            return false;
        }
        window.location.href = '/api/paper/exportto?artilceIds=' + "sxhlzz201803019" + '&exportType=' + Class

    }

    ExportFn() {
        this.export = true;
    }

    closeExport() {
        this.export = false;
    }

    risk(Class, title) {
        var test = window.location.href;
        switch (Class) {
            case  'QQ好友':
                var p = {
                    url: test,/*获取URL，可加上来自分享到QQ标识，方便统计*/
                    desc: '精准肿瘤知识库', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
                    title: title,/*分享标题(可选)*/
                    summary: title,/*分享描述(可选)*/
                    pics: 'http://med.wanfangdata.com.cn/Content/Images/rwd/hf/logo-MED-lg-top.png',/*分享图片(可选)*/
                    flash: '', /*视频地址(可选)*/
                    //commonClient : true, /*客户端嵌入标志*/
                    site: '精准肿瘤知识库'/*分享来源 (可选) ，如：QQ分享*/
                };
                var s = [];
                for (let i in p) {
                    s.push(i + '=' + encodeURIComponent(p[i] || ''));
                }
                var target_url = "http://connect.qq.com/widget/shareqq/iframe_index.html?" + s.join('&');
                window.open(target_url, 'qq',
                    'height=520, width=720');
                break;
            case  'QQ空间':
                var Qp = {
                    url: test,
                    showcount: '1',/*是否显示分享总数,显示：'1'，不显示：'0' */
                    desc: title,/*默认分享理由(可选)*/
                    summary: title,/*分享摘要(可选)*/
                    title: title,/*分享标题(可选)*/
                    site: title,/*分享来源 如：腾讯网(可选)summary*/
                    pics: 'http://med.wanfangdata.com.cn/Content/Images/rwd/hf/logo-MED-lg-top.png', /*分享图片的路径(可选)*/
                    style: '101',
                    width: 199,
                    height: 30
                };
                var s = [];
                for (var i in Qp) {
                    s.push(i + '=' + encodeURIComponent(Qp[i] || ''));
                }
                var target_url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&');
                window.open(target_url, 'qZone',
                    'height=430, width=400');
                break;
            case  '微博':
                var param = {
                    url: test,
                    type: '3',
                    count: '1',
                    /** 是否显示分享数，1显示(可选)*/
                    appkey: title,
                    /** 您申请的应用appkey,显示分享来源(可选)*/
                    title: title,
                    /** 分享的文字内容(可选，默认为所在页面的title)*/
                    pic: 'http://med.wanfangdata.com.cn/Content/Images/rwd/hf/logo-MED-lg-top.png',
                    /**分享图片的路径(可选)*/ ralateUid: '',
                    /**关联用户的UID，分享微博会@该用户(可选)*/
                    rnd: new Date().valueOf()
                }
                var temp = [];
                for (var Wp in param) {
                    temp.push(Wp + '=' + encodeURIComponent(param[Wp] || ''))
                }
                var target_url = "http://service.weibo.com/share/share.php?" + temp.join('&');
                window.open(target_url, 'sinaweibo',
                    'height=430, width=400');
                break;
            default:
                break;
        }
    }


    goBack() {
        history.back();
    }

    special(title) {
        if (title === '相关基因') {
            this.navCtrl.navigateForward(['/special'], {queryParams: {'expressionSearch': ''}}).then(r => {
            });
        } else if (title === '相关疾病') {
            this.navCtrl.navigateForward(['/disease'], {queryParams: {'expressionSearch': ''}}).then(r => {
            });
        } else if (title === '相关药物') {
            this.navCtrl.navigateForward(['/disease'], {queryParams: {'expressionSearch': ''}}).then(r => {
            });
        }

    }


    TabFn(num) {
        this.typeClass = num;
    }


}

