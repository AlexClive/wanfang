import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SearchPage} from './search.page';
import {HeaderTModule} from "../module/header-t/header-t.module";
import {FooterModule} from "../module/footer/footer.module";

const routes: Routes = [
    {
        path: '',
        component: SearchPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FooterModule,
        HeaderTModule
    ],
    declarations: [SearchPage]
})
export class SearchPageModule {
}
