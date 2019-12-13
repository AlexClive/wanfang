import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultPage } from './result.page';
import {FooterModule} from "../module/footer/footer.module";
import {HeaderTModule} from "../module/header-t/header-t.module";

const routes: Routes = [
  {
    path: '',
    component: ResultPage
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
  declarations: [ResultPage]
})
export class ResultPageModule {}
