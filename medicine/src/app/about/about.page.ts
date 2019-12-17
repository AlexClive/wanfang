import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {CommonService} from '../service/common.service';
import {ConfigService} from '../service/config.service';
import * as Highcharts from 'highcharts';
import Wordcloud from 'highcharts/modules/wordcloud';

Wordcloud(Highcharts);

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    public search: any = '';
    public searchText: any = '';
    public InitSearchText: any;
    public dateOfPublish: String = '';
    public sort: object[] = [{text: '全部', initial: true}, {text: '基因', initial: false}, {
        text: '表型',
        initial: false
    }, {text: '疾病', initial: false}, {text: '药物', initial: false}];
    public tableData: object[] = [];

    constructor(
        public route: Router,
        public activatedRoute: ActivatedRoute,
        public common: CommonService,
        public config: ConfigService,
    ) {
    }

    ionViewDidEnter() {
        this.activatedRoute.queryParams.subscribe((data: any) => {
            if (data.search === undefined) {
                const expressionSearch = JSON.parse(data.expressionSearch);
                this.searchText = '';
                for (let i = 0; i < expressionSearch.qualification.length; i++) {
                    if (expressionSearch.qualification[i].input !== '') {
                        if (expressionSearch.qualification[i].field !== '全部字段') {
                            if (i !== 0) {
                                switch (expressionSearch.qualification[i].logic) {
                                    case '与':
                                        this.searchText += ' AND ';
                                        break;
                                    case '或':
                                        this.searchText += ' OR ';
                                        break;
                                    case '非':
                                        this.searchText += ' NOT ';
                                        break;
                                }
                            }
                            this.searchText += '(' + expressionSearch.qualification[i].field + '=';
                        } else {
                            this.searchText += '(';
                        }
                        if (expressionSearch.qualification[i].fuzzy === '精确') {
                            this.searchText += '"' + expressionSearch.qualification[i].input + '")';
                        } else {
                            this.searchText += expressionSearch.qualification[i].input + ')';
                        }

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
                    this.searchText = '(' + type.text + '=' + JSON.parse(data.search).text + ')';
                } else {
                    this.searchText = JSON.parse(data.search).text;
                }
            }
            this.InitSearchText = this.searchText;
            this.httpServe(this.searchText + this.dateOfPublish);
        });
    }

    ngOnInit() {
    }

    httpServe(Value) {
        this.common.serverPost(this.config.getchart + '?q=' + encodeURIComponent(Value), {}, (data) => {
            this.TrendsEC(data.Data.Trend);
            this.agencyEC(data.Data.Organ);
            this.publicationEC(data.Data.Periodical);
            this.keyword(data.Data.ListKeyword);
            this.WriterEc(data.Data.ListAuthor);
        });
    }

    TrendsEC(Value) {
        /*发文趋势*/
        let chart = Highcharts.chart('postTrends', {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },

            xAxis: {
                categories: Value.xaxis,
                crosshair: false
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                // head + 每个 point + footer 拼接成完整的 table
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                }
            },
            series: [{
                name: '发文趋势',
                data: Value.series,
                type: 'column',
            }]
        });
    }

    WriterEc(Value) {
        /*作者分析*/
        this.tableData = Value;
        let data = [];
        for (let i = 0; i < Value.length; i++) {
            data.push({
                x: Value[i].Count,
                y: Value[i].Value,
                name: Value[i].Name
            });
        }
        let chart = Highcharts.chart('writer', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: ''
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: false,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '{point.name}',
                        pointFormat: '{point.name}:<br/>[{point.x}, {point.y}]'
                    }
                }
            },
            series: [
                {
                    name: '',
                    color: 'rgba(223, 83, 83, .5)',
                    data: data,
                    type: 'scatter',
                }
            ]
        });
    }

    agencyEC(Value) {
        /*机构分析*/
        console.log(Value)
        let chart = Highcharts.chart('agency', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: Value.yaxis
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                // head + 每个 point + footer 拼接成完整的 table
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                }
            },
            series: [
                {
                    name: '机构分析',
                    data: Value.series,
                    type: 'column'
                }
            ]
        });
    }

    publicationEC(data) {
        let series = [];
        for (let i = 0; i < data.yaxis.length; i++) {
            series.push({
                name: data.yaxis[i],
                data: [data.series[i]]
            });
        }
        console.log(series);
        /*期刊发表频次*/
        var chart = Highcharts.chart('publication', {
            chart: {
                type: 'line'
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: data.yaxis
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        // 开启数据标签
                        enabled: true
                    },
                    // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                    enableMouseTracking: false
                }
            },
            series: [
                {
                    name: data.yaxis[0],
                    data: data.series,
                    type: 'line'
                }
            ]
        });

    }

    keyword(value) {
        /*词云图*/
        /*
        * {name: "Lorem", weight: 1}
        * */
        let data = [];
        for (let i = 0; i < value.length; i++) {
            data.push({
                name: value[i].Name, weight: value[i].Count
            });
        }
        Highcharts.chart('keyWords', {
            credits: {
                enabled: false
            },
            series: [{
                type: 'wordcloud',
                data: data
            }],
            title: {
                text: ''
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
                        this.search['type'] = this.sort[i];
                    } else {
                        this.search.type = '';
                    }
                }
            }
        }

    }

}
