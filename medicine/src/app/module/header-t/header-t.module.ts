import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderTComponent} from './header-t.component';

@NgModule({
    declarations: [HeaderTComponent],
    imports: [
        CommonModule
    ],
    exports: [HeaderTComponent]
})
export class HeaderTModule {
}
