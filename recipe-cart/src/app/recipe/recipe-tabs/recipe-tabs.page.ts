import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-recipe-tabs',
  templateUrl: './recipe-tabs.page.html',
  styleUrls: ['./recipe-tabs.page.scss'],
})
export class RecipeTabsPage implements OnInit, OnDestroy {

  constructor( public route: ActivatedRoute,
               private cacheService: CacheService, 
               private recipeService: RecipeService ) { }

  ngOnInit() {
     // Assigns the current url parameter to a variable.
     var url = this.route.snapshot.params.url;

     // check that the data has been loaded.
     var recipe = this.recipeService.getRecipe(url);

     // store the information for use by other pages.
     this.cacheService.set(recipe);
  }

  ngOnDestroy(){
    // clear the information since we don't need it anymore
    // when this page is destroyed.
    this.cacheService.clear();
  }

}
