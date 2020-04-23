import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  // The parent page for all recipe interfaces.
  {
    path: 'recipe',
    children: [
      // http://localhost:4200/recipe
      {
        path: '',
        loadChildren: () => import('./recipe/recipe-home/recipe-home.module').then( m => m.RecipeHomePageModule)
      },

      // http://localhost:4200/recipe/view
      {
        // This is the path nested under /recipe
        path: 'view',
        // This is the module/page that will load when we access this link. 
        loadChildren: () => import('./recipe/recipe-tabs/recipe-tabs.module').then( m => m.RecipeTabsPageModule)
      }
    ]
  },
  {
    path: 'recipe-summary', // http://localhost:8100/recipe-summary
    loadChildren: () => import('./recipe/recipe-summary/recipe-summary.module').then( m => m.RecipeSummaryPageModule)
  },
  {
    path: 'recipe-ingredients', // http://localhost:8100/recipe-ingredients
    loadChildren: () => import('./recipe/recipe-ingredients/recipe-ingredients.module').then( m => m.RecipeIngredientsPageModule)
  },
  {
    path: 'recipe-directions', // http://localhost:8100/recipe-directions
    loadChildren: () => import('./recipe/recipe-directions/recipe-directions.module').then( m => m.RecipeDirectionsPageModule)
  },
  {
    path: 'recipe-home',
    loadChildren: () => import('./recipe/recipe-home/recipe-home.module').then( m => m.RecipeHomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
