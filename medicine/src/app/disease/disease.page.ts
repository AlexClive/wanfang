import {Component, OnInit} from '@angular/core';
import {CommonService} from "../service/common.service";
import {ConfigService} from "../service/config.service";

@Component({
    selector: 'app-disease',
    templateUrl: './disease.page.html',
    styleUrls: ['./disease.page.scss'],
})
export class DiseasePage implements OnInit {

    public pageNumArry: any = [1, 2];
    public pageNum: number = 1;
    public pageBoo: boolean = false;
    public isPC: boolean = false;
    public eventLoadFn: any;

    constructor(
        public common: CommonService,
        public config: ConfigService
    ) {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            this.isPC = true;
        }
    }

    ngOnInit() {
    }

    dataServe() {

    }

    pageFn() {
        this.pageBoo = !this.pageBoo;
    }

    pageGo(num, $event) {
        this.pageNum = num;
        this.pageBoo = !this.pageBoo;
        $event.stopPropagation();
    }

    leftCut() {
        if (this.pageNum === 1) {
            return;
        }
        this.pageNum = --this.pageNum;
    }

    pageNumGO(num) {
        this.pageNum = num;
    }

    rightAdd() {
        if (this.pageNumArry.length === this.pageNum) {
            return;
        }
        this.pageNum = ++this.pageNum;
    }

    loadData(event) {
        if (this.pageNum === 0) {
            ++this.pageNum;
        } else {
            this.pageNum = 2;
        }
        //   this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum, event);
        console.log(event);
        /*数据加载完成后需要执行的函数*/
        //    event.target.complete();
        //    event.target.disabled = true;
        this.eventLoadFn = event;
    }

    doRefresh(event) {
        this.pageNum = 1;
        // this.dataServe(this.search_text + this.dateOfPublish + '&p=' + this.pageNum, undefined);
        setTimeout(() => {
            event.target.complete();
        }, 2000);
        if (this.eventLoadFn !== undefined) {
            this.eventLoadFn.target.disabled = false;
        }

    }
}
