import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeTabsPage } from './recipe-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeTabsPageRoutingModule {}
