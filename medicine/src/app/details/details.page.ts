import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from "../service/config.service";
import {CommonService} from "../service/common.service";

declare var domainconfig;

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    public position: String = '';
    public Data: any = {
        Title: []
    };

    public refPalette: any[] = ['#d43737', '#dc5c3e', '#e08351', '#fec351', '#e95656', '#af3533', '#ce6557', '#e9ad4a', '#eecc4e', '#db9959']; // 参考文献
    public qotPalette: any[] = ['#77c7ff', '#5bb3d2', '#86cbee', '#4cade0', '#2983b2', '#5ea4d5', '#8cbed3', '#9fd7e5', '#68ccf0', '#2b83c0']; // 引证文献
    public literature: any = {
        RefYearsShort: {
            years: [],
            date: []
        },
        RefYears: {
            years: [],
            date: []
        }, /*参考文献*/
        CiteYearsShort: {
            years: [],
            date: []
        },
        CiteYears: {
            years: [],
            date: []
        } /*印证文献*/
    };

    public address = domainconfig.domain.f;
    public Id = '';
    public dbid = '';

    public references: any = {
        id: '',
        text: ''
    };

    public export = false;

    constructor(
        public activatedRoute: ActivatedRoute,
        public config: ConfigService,
        public common: CommonService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data: any) => {
            this.Id = data.Id;
            this.dbid = data.DBID;
            this.common.serverPost(this.config.details + '?id=' + encodeURIComponent(this.Id) + '&dbid=' + encodeURIComponent(this.dbid), {}, (data) => {
                this.Data = data.Data;
            });
            this.common.serverPost(this.config.refandciteyears + '?id=' + encodeURIComponent(this.Id), {}, (data) => {
                this.literature.RefYears.years = [];
                this.literature.RefYears.date = [];
                this.literature.RefYearsShort.years = [];
                this.literature.RefYearsShort.date = [];
                for (let key in data.Data.RefYears) {
                    this.literature.RefYears.years.push(key);
                    this.literature.RefYears.date.push(data.Data.RefYears[key]);
                }

                for (let key01 in data.Data.ShortRefYears) {
                    this.literature.RefYearsShort.years.push(key01);
                    this.literature.RefYearsShort.date.push(data.Data.RefYears[key01]);
                }
                this.literature.CiteYears.years = [];
                this.literature.CiteYears.date = [];
                this.literature.CiteYearsShort.years = [];
                this.literature.CiteYearsShort.date = [];
                for (let Key2 in data.Data.CiteYears) {
                    this.literature.CiteYears.years.push(Key2);
                    this.literature.CiteYears.date.push(data.Data.CiteYears[Key2]);
                }

                for (let Key21 in data.Data.ShortCiteYears) {
                    this.literature.CiteYearsShort.years.push(Key21);
                    this.literature.CiteYearsShort.date.push(data.Data.CiteYears[Key21]);
                }
            });
        });
    }

    openFn(val) {
        this.position = val;
    }

    PeriodFn(time) {
        time = new Date(time);
        return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
    }

    WidthFn(item, index, event, judge) {
        let StrWidth = 0;
        let num = 0;
        if (event === 'left') {
            for (let i = 0; i < this.literature.RefYears.date.length; i++) {
                num += this.literature.RefYears.date[i];
            }
            if (judge === '0') {
                StrWidth = Math.floor(this.literature.RefYears.date[index] / num * 100 + 2);
                if (StrWidth > 40) {
                    StrWidth = StrWidth - 9;
                }
            } else {
                StrWidth = Math.floor(this.literature.RefYears.date[index] / num * 100);
            }

        } else {
            for (let i = 0; i < this.literature.CiteYears.date.length; i++) {
                num += this.literature.CiteYears.date[i];
            }
            if (judge === '0') {
                StrWidth = Math.floor(this.literature.CiteYears.date[index] / num * 100 + 2);
            } else {
                StrWidth = Math.floor(this.literature.CiteYears.date[index] / num * 100);
            }
        }

        return StrWidth + '%';
    }

    WidthFn1(item, index, event) {
        let StrWidth = 0;
        let num = 0;
        if (event === 'left') {
            for (let i = 0; i < this.literature.RefYearsShort.date.length; i++) {
                num += this.literature.RefYearsShort.date[i];
            }
            StrWidth = Math.floor(this.literature.RefYearsShort.date[index] / num * 100);
        } else {
            for (let i = 0; i < this.literature.CiteYearsShort.date.length; i++) {
                num += this.literature.CiteYearsShort.date[i];
            }
            StrWidth = Math.floor(this.literature.CiteYearsShort.date[index] / num * 100);
        }
        let Width: any;
        if (item > 1) {
            Width = StrWidth <= 10 ? 12 : StrWidth - item;
        } else {
            Width = StrWidth <= 10 ? 12 : StrWidth;
        }
        return Width + '%';
    }

    download() {
        window.location.href = this.address + 'PercisionArticleFullText?inline=True&Id=PeriodicalPaper_' + this.Id;
    }

    reading() {
        window.location.href = this.address + 'PercisionArticleFullText?Id=PeriodicalPaper_' + this.Id;
    }

    goBack() {
        history.back();
    }

    Creator(item) {
        var text = '';
        if (item === undefined) {
            return;
        }
        for (let i = 0; i < item.length; i++) {
            text += item[i].split('$')[1];
            if (i < item.length - 1) {
                text += '；';
            }
        }
        return text;
    }

    ExportFn(id, text) {
        this.references.id = id;
        this.references.text = text;
        this.export = true;
    }

    expressFn(Class) {
        window.open('/api/paper/exportto?artilceIds=' + this.references.id + '&exportType=' + Class);
    }

    closeExport() {
        this.export = false;
    }

}
