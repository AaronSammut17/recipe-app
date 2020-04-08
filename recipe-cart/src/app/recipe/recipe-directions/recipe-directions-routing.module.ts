import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDirectionsPage } from './recipe-directions.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeDirectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDirectionsPageRoutingModule {}
