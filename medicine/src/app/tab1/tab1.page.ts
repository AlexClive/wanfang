import {Component} from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public list: string[] = new Array();

    constructor() {
        console.log('我进入tab1页面了');
        for (let i = 0; i < 20; i++) {
            this.list.push('我是第' + i + '个列表');
        }
    }

    doRefresh(event) {
        console.log('下拉刷新');
        let listArr: string[] = new Array();
        for (let i = 0; i < 6; i++) {
            listArr.push('*我是新的第' + i + '个列表');
        }
        this.list = listArr.concat(this.list);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }

    loadData(event) {
      let listArr: string[] = new Array();
      for (let i = 0; i < 20; i++) {
        listArr.push('*我是加载出来的：第' + i + '个列表');
      }
      this.list = this.list.concat(listArr);
      event.target.complete();
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // 应用程序逻辑，以确定是否已加载所有数据
            // 并禁用无限滚动
            if (this.list.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
}
