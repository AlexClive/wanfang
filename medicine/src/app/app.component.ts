import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {NavigationEnd, Router} from '@angular/router';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
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
        private appMinimize: AppMinimize
    ) {
        this.initializeApp();
        this.platform.backButton.subscribe(() => {
            this.physicalReturn();
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    physicalReturn() {
        /*物理按键返回*/
        if (this.url === '/tabs/tab1' || this.url === '/tabs/tab2' || this.url === '/tabs/tab3' || this.url === '/tabs/tab4') {
            this.appMinimize.minimize();
        } else {
            window.history.back();
        }
    }


}
