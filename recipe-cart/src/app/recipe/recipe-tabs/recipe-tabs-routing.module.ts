import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeTabsPage } from './recipe-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeTabsPage,
    children: [
      // This is the default path that loads if no other criteria are given in the url.
      // recipe/view will be directed to another page.
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary'
      },

      // The summery page path.
      {
        path: 'summary',
        // This is a function that loads the page into the content tag.
        // ../ means that it will look into the parent folder and find this path.
        loadChildren: () => import('../recipe-summary/recipe-summary.module').then( m => m.RecipeSummaryPageModule)
      },

      // The ingredients page path.
      {
        path: 'ingredients',
        loadChildren: () => import('../recipe-ingredients/recipe-ingredients.module').then( m => m.RecipeIngredientsPageModule)
      },

      // The directions page path.
      {
        path: 'directions',
        loadChildren: () => import('../recipe-directions/recipe-directions.module').then( m => m.RecipeDirectionsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeTabsPageRoutingModule {}
