import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../service/common.service';
import {ConfigService} from '../../service/config.service';

declare var domainconfig;

@Component({
    selector: 'app-header-t',
    templateUrl: './header-t.component.html',
    styleUrls: ['./header-t.component.scss'],
})
export class HeaderTComponent implements OnInit {

    public ISLogin = true;

    constructor(
        public route: Router,
        public activatedRoute: ActivatedRoute,
        public navCtrl: NavController,
        public common: CommonService,
        public config: ConfigService,
    ) {
        this.common.serveGet(this.config.doLogin, (data) => {
            console.log(data);
            if (data.IsLogin !== false) {
                this.ISLogin = false;
            }
        });
    }

    ngOnInit() {
    }

    login() {
        window.location.href = domainconfig.domain.login + 'Account/LogOn?ReturnUrl=' + window.location.href;
    }

    registered() {
        window.location.href = domainconfig.domain.login + 'Account/Register?ReturnUrl=' + window.location.href;
    }

    goBack() {
        history.back();
    }

    GoHome() {
        window.location.href = '/';
    }
}
