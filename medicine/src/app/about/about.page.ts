import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavController} from '@ionic/angular';
import {CommonService} from "../service/common.service";
import {ConfigService} from "../service/config.service";
import * as echarts from 'echarts';

import('echarts-wordcloud');

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    public search: any = '';
    public search_text: any = '';
    public Initsearch_text: any;
    public dateOfPublish: string = '';
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
                        if (expressionSearch.qualification[i].fuzzy === '精确') {
                            this.search_text += '"' + expressionSearch.qualification[i].input + '")';
                        } else {
                            this.search_text += expressionSearch.qualification[i].input + ')';
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
                    this.search_text = '(' + type.text + '=' + JSON.parse(data.search).text + ')';
                } else {
                    this.search_text = JSON.parse(data.search).text;
                }
            }
            this.Initsearch_text = this.search_text;
            this.httpServe(this.search_text + this.dateOfPublish);
        });
    }

    ngOnInit() {
    }

    httpServe(Value) {
        this.common.serverPost(this.config.getchart + '?q=' + Value, {}, (data) => {
            console.log(data);
            this.TrendsEC(data.Data.Trend);
            this.agencyEC(data.Data.Organ);
            this.publicationEC(data.Data.Periodical);
            this.keyword(data.Data.ListKeyword);
            this.WriterEc(data.Data.ListAuthor);
        });
    }

    TrendsEC(data) {
        /*发文趋势*/
        const ec = echarts as any;
        const myPostTrends = ec.init(document.getElementById('postTrends'));
        const postTrendsOption: any = {
            // backgroundColor: '#0f375f',
            grid: {
                top: '5%',
                left: '2%',
                right: 0,
                bottom: '10%'
            },
            xAxis: {
                data: data.xaxis,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    color: '#999999'
                },
                splitLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
                {
                    type: 'value',
                    name: '',
                    nameTextStyle: {
                        color: '#333333'
                    },
                    position: 'right',
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        formatter: '{value} %',
                        textStyle: {
                            color: '#333333'
                        }
                    }
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    min: 50,
                    max: 100,
                    splitNumber: 8,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                        }
                    }
                }
            ],
            series: [{
                name: '',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                showAllSymbol: false,
                symbol: 'circle',
                symbolSize: 0,
                itemStyle: {
                    color: 'rgba(5,140,255, 0.1)'
                },
                lineStyle: {
                    // color: '#058cff'
                },
                areaStyle: {
                    color: 'rgba(5,140,255, 0.2)'
                },
                data: data.series
            },
                {
                    name: '',
                    type: 'bar',
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#29B6F6'
                            },
                                {
                                    offset: 1,
                                    color: '#29B6F6'
                                }
                            ])
                        }
                    },
                    data: data.series
                }
            ]
        };
        myPostTrends.setOption(postTrendsOption);
    }

    WriterEc(data) {
        this.tableData = data;
        let serve = [];
        for (let i = 0; i < data.length; i++) {
            serve.push([data[i].Count, data[i].CitedCount, data[i].Name]);
        }
        /*作者分析*/
        const ec = echarts as any;
        const myWriter = ec.init(document.getElementById('writer'));
        const Writeroption = {
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                },
                formatter: function (params, ticket, callback) {
                    let showHtm = '';
                    for (let i = 0; i < params.length; i++) {
                        console.log(params[i]['data'][2]);
                        //x轴名称
                        let name = params[i]['data'][2];
                        //名称
                        let text = params[i]['data'][0];
                        showHtm += name + '--' + text + '<br>';
                    }
                    return showHtm;
                },
                zlevel: 1
            },
            grid: {
                top: '10px',
                right: '10px',
                bottom: '30px',
                left: '100px'
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true
                }
            ],
            series: [
                {
                    name: '',
                    type: 'scatter',
                    large: true,
                    symbolSize: 3,
                    data: serve,
                    color: '#2B4F8C',
                },
            ]
        };
        myWriter.setOption(Writeroption);
    }

    agencyEC(data) {
        /*机构分析*/
        const ec = echarts as any;
        const myagency = ec.init(document.getElementById('agency'));
        const agencyOption = {
            grid: {
                top: '5%',
                left: '5%',
                right: 0,
                bottom: '10%'
            },
            xAxis: {
                data: data.yaxis,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    nameTextStyle: {
                        color: '#999999'
                    },
                    splitLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#333333'
                        }
                    }
                },
                {
                    type: 'value',
                    name: '',
                    nameTextStyle: {
                        color: '#333333'
                    },
                    position: 'right',
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        formatter: '{value} %',
                        textStyle: {
                            color: '#333333'
                        }
                    }
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    min: 50,
                    max: 100,
                    splitNumber: 8,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true,
                    showAllSymbol: false,
                    symbol: 'circle',
                    symbolSize: 0,
                    itemStyle: {
                        color: 'rgba(5,140,255, 0.1)'
                    },
                    lineStyle: {
                        // color: '#058cff'
                    },
                    areaStyle: {
                        color: 'rgba(5,140,255, 0.2)'
                    },
                    data: data.series
                },
                {
                    name: '',
                    type: 'bar',
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#29B6F6'
                            },
                                {
                                    offset: 1,
                                    color: '#29B6F6'
                                }
                            ])
                        }
                    },
                    data: data.series
                }
            ]
        };
        myagency.setOption(agencyOption);
    }

    publicationEC(data) {
        console.log(data);
        const ec = echarts as any;
        /*期刊发表频次*/
        const mypublication = ec.init(document.getElementById('publication'));
        const publicationOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                //   data: ['期刊', '期刊一', '哈哈哈'],
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#999'
                }
            },
            grid: {
                top: '20px',
                left: '3%',
                right: '3%',
                bottom: 0,
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                data: data.yaxis
            }],
            yAxis: [{
                type: 'value',
                name: '',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }],
            series: [{
                name: '期刊',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: data.series
            }, {
                name: '期刊一',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(0,136,212)',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12

                    }
                },
                data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
            }, {
                name: '哈哈哈',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {

                        color: 'rgb(219,50,51)',
                        borderColor: 'rgba(219,50,51,0.2)',
                        borderWidth: 12
                    }
                },
                data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
            }]
        };
        mypublication.setOption(publicationOption);
    }

    keyword(data) {
        /*关键词热度*/
        const ec = echarts as any;
        const myChart = ec.init(document.getElementById('keyWords'));
        let keydata = [];
        for (let i = 0; i < data.length; i++) {
            keydata.push({
                name: data[i]["Name"],
                value: Math.ceil(data[i]["Value"]),
            });
        }
        const option = {
            title: {
                text: '词云展示',
                x: 'left',
                textStyle: {
                    fontSize: 23,
                    color: 'rgba(255, 255, 255, 0.8)'
                }

            },
            grid: {
                top: '1%',
                left: '3%',
                right: '3%',
                bottom: 0,
                containLabel: true
            },
            tooltip: {
                show: true
            },
            toolbox: {
                show: true,
                showTitle: false, // 隐藏默认文字，否则两者位置会重叠
                tooltip: { // 和 option.tooltip 的配置项相同
                    show: true,
                    formatter(param) {
                        console.log(param);
                        return;
                        return '<div>' + param.title + '</div>'; // 自定义的 DOM 结构
                    },
                    backgroundColor: '#222',
                    textStyle: {
                        fontSize: 12,
                    },
                    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // 自定义的 CSS 样式
                }
            },
            series: [{
                name: '关键词',
                type: 'wordCloud',
                size: ['9%', '80%'],
                sizeRange: [6, 66],
                textRotation: [0, 45, 90, -45],
                // rotationRange: [-45, 90],//旋转角度区间
                rotationStep: 90,
                shape: 'circle',
                gridSize: 10,
                textPadding: 0,
                width: 800,
                height: 500,
                autoSize: {
                    enable: true,
                    minSize: 6
                },
                textStyle: {
                    normal: {
                        color() {
                            return 'rgb(' + [
                                /*   Math.round(Math.random() * 105) + 150,
                                   Math.round(Math.random() * 105) + 150,
                                   Math.round(Math.random() * 105) + 150*/
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                    }
                },
                data: keydata,
            }]
        };
        myChart.setOption(option);
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
