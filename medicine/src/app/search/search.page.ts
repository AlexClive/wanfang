import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {CommonService} from "../service/common.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    public condition: object[] = [{
        logic: ['与', '或', '非'],
        field: ['基因', '表型', '疾病', '药物', '作者', '刊名', '机构名'],
        input: '',
        fuzzy: ['模糊', '精确'],
    }, {
        logic: ['与', '或', '非'],
        field: ['基因', '表型', '疾病', '药物', '作者', '刊名', '机构名'],
        input: '',
        fuzzy: ['模糊', '精确'],
    }];

    public time: object[] = [{
        start: [1999, 2000],
        end: [1999, 2000],
    }];
    /*条件的显示隐藏*/
    public conditionISHide: object[] = [{
        logic: false,
        field: false,
        fuzzy: false
    }, {
        logic: false,
        field: false,
        fuzzy: false
    }];

    /*开始时间与结束时间的显示隐藏*/
    public IsHideTime = {
        start: false,
        end: false
    };


    /*检索值*/
    public consequence: any = {
        qualification: [
            {
                logic: '与',
                field: '全部字段',
                input: '',
                fuzzy: '模糊'
            }, {
                logic: '与',
                field: '全部字段',
                input: '',
                fuzzy: '模糊'
            }
        ],
        time: {
            start: '开始',
            end: '结束'
        }
    };
    public height: any;

    /*最终结果*/
    public effect: string = '';

    constructor(
        public navCtrl: NavController,
        public Common: CommonService
    ) {
        if (document.body.clientHeight > 788) {
            this.height = document.body.clientHeight - 104 - 179 - 107 + 'px';
        }
    }

    ngOnInit() {
    }

    jian(index) {
        /*减去*/
        let lavishly: object[] = [];
        if (this.condition.length > 2) {
            for (let i = 0; i < this.condition.length; i++) {
                if (index != i) {
                    lavishly.push(this.condition[i]);
                }
            }
            this.condition = lavishly;
        } else {
            let list: any = {
                logic: ['与', '或', '非'],
                field: ['基因', '表型', '疾病', '药物', '作者', '刊名', '机构名'],
                input: '',
                fuzzy: ['模糊', '精确'],
            };
            this.condition[index] = list;
        }

    }

    add() {
        /*增加*/
        if (this.condition.length < 5) {
            this.condition.push({
                logic: ['与', '或', '非'],
                field: ['基因', '表型', '疾病', '药物', '作者', '刊名', '机构名'],
                input: '',
                fuzzy: ['模糊', '精确'],
            });
            this.conditionISHide.push({
                logic: '与',
                field: '全部字段',
                input: '',
                fuzzy: '模糊'
            });
            this.consequence.qualification.push({
                logic: '与',
                field: '全部字段',
                input: '',
                fuzzy: '模糊'
            });

        }

    }

    chooseToTime(index, $event) {
        switch (index) {
            case 0:
                this.IsHideTime.start = true;
                this.IsHideTime.end = false;
                break;
            case 1:
                this.IsHideTime.start = false;
                this.IsHideTime.end = true;
                break;
            default:
                break;
        }
        $event.stopPropagation();
    }

    /*确认出版时间*/
    Timeconfirm(index, text, $event) {
        switch (index) {
            case 0:
                this.consequence.time.start = text;
                this.IsHideTime.start = false;
                break;
            case 1:
                this.consequence.time.end = text;
                this.IsHideTime.end = false;
                break;
            default:
                break;
        }
        $event.stopPropagation();
    }

    /*限定条件的显示隐藏*/
    qualificationISShow(index, evet, $event) {
        /*
        * index=> 索引
        * evet => 那个元素  logic  field  fuzzy
        * */
        for (var i = 0; i < this.conditionISHide.length; i++) {
            this.conditionISHide[i]['logic'] = false;
            this.conditionISHide[i]['field'] = false;
            this.conditionISHide[i]['fuzzy'] = false;
        }
        if (evet === 'logic') {
            this.conditionISHide[index]['logic'] = true;
        } else if (evet === 'field') {
            this.conditionISHide[index]['field'] = true;
        } else if (evet === 'fuzzy') {
            this.conditionISHide[index]['fuzzy'] = true;
        }
        $event.stopPropagation();
    }

    /*确定限定条件*/
    qualificationconfirm(index, text, evet, $event) {
        for (var i = 0; i < this.conditionISHide.length; i++) {
            this.conditionISHide[i]['logic'] = false;
            this.conditionISHide[i]['field'] = false;
            this.conditionISHide[i]['fuzzy'] = false;
        }
        if (evet === 'logic') {
            this.consequence.qualification[index]['logic'] = text;
        } else if (evet === 'field') {
            this.consequence.qualification[index]['field'] = text;
        } else if (evet === 'fuzzy') {
            this.consequence.qualification[index]['fuzzy'] = text;
        }
        $event.stopPropagation();
    }

    /*检索*/
    search() {
        let mark = 0;
        for (let i = 0; i < this.consequence.qualification.length; i++) {
            if (this.consequence.qualification[i]['input'] === '') {
                ++mark;
            }
        }
        if (mark === this.consequence.qualification.length) {
            this.Common.presentToast('请输入搜索关键词', 'top').then(r => {});
            return;
        }
        this.effect = JSON.stringify(this.consequence);
        this.navCtrl.navigateForward(['/result'], {queryParams: {'expressionSearch': this.effect}}).then(r => {});

    }

    /*初始化*/
    init() {
        this.IsHideTime.start = false;
        this.IsHideTime.end = false;
        for (let i = 0; i < this.conditionISHide.length; i++) {
            this.conditionISHide[i]['logic'] = false;
            this.conditionISHide[i]['field'] = false;
            this.conditionISHide[i]['fuzzy'] = false;
        }
    }
}
