import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.page.html',
  styleUrls: ['./recipe-home.page.scss'],
})
export class RecipeHomePage implements OnInit {
    
  /**
  * The categories available to this interface.
  */
  public categories: any[] = [];

  /**
  * The recipes available to this interface.
  */
  public recipes: any[] = [];

  /**
  * The category slider options.
  */
  public categorySlideOpts = {
    slidesPerView: 2.25
  };
    
  /**
  * The recipe slider options.
  */
  public recipeSlideOpts = {
    slidesPerView: 1.25
  };

  constructor(
    public recipeService: RecipeService
    ) { }

  //use async whenever there is dynamic data is loaded into the page/app.
  async ngOnInit()
    {
        console.log("Starting to load...");

        // we'll wait for the function to complete before the app is shown.
        await this.recipeService.preload();

        this.categories = this.recipeService.getCategories();
        this.recipes = this.recipeService.getRecipes(true, 5);

        
        console.log("Finished.");
    }

}
