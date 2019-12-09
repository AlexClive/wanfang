import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-disease',
    templateUrl: './disease.page.html',
    styleUrls: ['./disease.page.scss'],
})
export class DiseasePage implements OnInit {

    public pageNumArry: any = [1, 2];
    public pageNum: number = 1;
    public pageBoo: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    pageFn() {
        this.pageBoo = !this.pageBoo;
    }

    pageGo(num, $event) {
        this.pageNum = num;
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
}
