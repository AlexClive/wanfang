import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'special', loadChildren: './special/special.module#SpecialPageModule' },
  { path: 'making', loadChildren: './making/making.module#MakingPageModule' },
  { path: 'thematic', loadChildren: './thematic/thematic.module#ThematicPageModule' },
  { path: 'disease', loadChildren: './disease/disease.module#DiseasePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
