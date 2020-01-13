import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../service/common.service';
import {ConfigService} from '../../service/config.service';
import {StorageService} from '../../service/storage.service';

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
        public storage: StorageService
    ) {
        this.common.serveGet(this.config.doLogin, (data) => {
            if (data.IsLogin !== false) {
                this.ISLogin = false;
                this.storage.setStorage('Login', 1);
            } else {
                this.storage.setStorage('Login', 0);
            }
        });
    }

    ngOnInit() {
    }

    login() {
        this.common.serveGet(this.config.doLogin, (data) => {
            if (data.IsLogin !== false) {
                return false;
            } else {
                window.location.href = domainconfig.domain.login + 'Account/LogOn?ReturnUrl=' + encodeURIComponent(window.location.href);
            }
        });
    }

    registered() {
        window.location.href = domainconfig.domain.login + 'Account/Register?ReturnUrl=' + encodeURI(window.location.href);
    }

    goBack() {
        history.back();
    }

    GoHome() {
        window.location.href = '/';
    }
}
