import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Header2Component} from './header2.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [Header2Component],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [Header2Component]
})
export class Header2Module {
}
