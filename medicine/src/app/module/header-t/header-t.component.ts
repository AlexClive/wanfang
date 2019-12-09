import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header-t',
    templateUrl: './header-t.component.html',
    styleUrls: ['./header-t.component.scss'],
})
export class HeaderTComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    registered() {
        window.location.href = 'http://login.med.wanfangdata.com.cn/Account/Register';
    }
}
