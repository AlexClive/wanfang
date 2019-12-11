import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {registerLocaleData,LocationStrategy,HashLocationStrategy} from "@angular/common";

import {IonicModule, IonicRouteStrategy, IonInfiniteScrollContent} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
/*
 唯一编码
 只能在android与ios中获取到
 */
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

/*
* 公共服务
* */
import {CommonService} from './service/common.service';
import {StorageService} from './service/storage.service';
import {ConfigService} from './service/config.service';

/*
* HttpClientModule
* */
import {HttpClientModule} from '@angular/common/http';
/*
* file
* */
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {DocumentViewer} from '@ionic-native/document-viewer/ngx';
import {AppMinimize} from '@ionic-native/app-minimize/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
/*公共组件*/
import {FooterModule} from './module/footer/footer.module';
import {HeaderTModule} from './module/header-t/header-t.module';

/*调用内置浏览器*/
import {BrowserTab} from '@ionic-native/browser-tab/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot({
        mode: 'ios',
        backButtonText: ''
    }), AppRoutingModule, HttpClientModule, FooterModule, HeaderTModule],
    providers: [
        StatusBar,
        SplashScreen,
        UniqueDeviceID,
        CommonService,
        StorageService,
        ConfigService,
        FileTransfer,
        File,
        FileOpener,
        DocumentViewer,
        AppMinimize,
        BrowserTab,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
        /*url中带有#*/
     /*   {provide: LocationStrategy, useClass: HashLocationStrategy}*/
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
