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
                console.log(data);
                this.Data = data.Data;
            });
        });
    }

    openFn(val) {
        this.position = val;
    }

}
