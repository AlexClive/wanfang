import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {HeaderTComponent} from './header-t.component';

@NgModule({
    declarations: [HeaderTComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [HeaderTComponent]
})
export class HeaderTModule {
}
