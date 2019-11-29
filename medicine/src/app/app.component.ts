import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {NavigationEnd, Router} from "@angular/router";
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import {StorageService} from './service/storage.service';
import {AppMinimize} from '@ionic-native/app-minimize/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public url: any = '';

    constructor(
        private platform: Platform,
        private route: Router,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private uniqueDeviceID: UniqueDeviceID,
        private StorageService: StorageService,
        private appMinimize: AppMinimize
    ) {
        this.initializeApp();
        this.UUID();
        this.platform.backButton.subscribe(() => {
            this.physicalReturn();
        });

        this.route.events.subscribe((data: any) => {
            if (data instanceof NavigationEnd) {
                this.url = data.url;
            }
        });

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    UUID() {
        this.uniqueDeviceID.get()
            .then((uuid: any) => {
                console.log(uuid);
            })
            .catch((error: any) => {
                this.StorageService.setStorage('wasp', 0);
            });
    }

    physicalReturn() {
        /*物理按键返回*/
        if (this.url == '/tabs/tab1' || this.url == '/tabs/tab2' || this.url == '/tabs/tab3' || this.url == '/tabs/tab4') {
            this.appMinimize.minimize();
        } else {
            window.history.back();
        }
    }
}
