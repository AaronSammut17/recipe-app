import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeIngredientsPage } from './recipe-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeIngredientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeIngredientsPageRoutingModule {}
