import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'editmeta', loadChildren: './editmeta/editmeta.module#EditmetaPageModule' },
  { path: 'tabs/tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
