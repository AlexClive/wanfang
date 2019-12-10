import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from "../service/config.service";
import {CommonService} from "../service/common.service";

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
        RefYears: {
            years: [],
            date: []
        }, /*参考文献*/
        CiteYears: {
            years: [],
            date: []
        } /*印证文献*/
    };

    constructor(
        public activatedRoute: ActivatedRoute,
        public config: ConfigService,
        public common: CommonService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data: any) => {
            let id = data.Id, dbid = data.DBID;
            this.common.serverPost(this.config.details + '?id=' + id + '&dbid=' + dbid, {}, (data) => {
                this.Data = data.Data;
            });
            this.common.serverPost(this.config.refandciteyears + '?id=' + id, {}, (data) => {
                this.literature.RefYears.years = [];
                this.literature.RefYears.date = [];
                for (let key in data.Data.RefYears) {
                    this.literature.RefYears.years.push(key);
                    this.literature.RefYears.date.push(data.Data.RefYears[key]);
                }
                this.literature.CiteYears.years = [];
                this.literature.CiteYears.date = [];
                for (let Key2 in data.Data.CiteYears) {
                    this.literature.CiteYears.years.push(Key2);
                    this.literature.CiteYears.date.push(data.Data.CiteYears[Key2]);
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
            console.log(judge);
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

}
