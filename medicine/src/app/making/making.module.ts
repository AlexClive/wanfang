import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MakingPage} from './making.page';
import {HeaderTModule} from "../module/header-t/header-t.module";
import {FooterModule} from "../module/footer/footer.module";

const routes: Routes = [
    {
        path: '',
        component: MakingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderTModule,
        FooterModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MakingPage]
})
export class MakingPageModule {
}
