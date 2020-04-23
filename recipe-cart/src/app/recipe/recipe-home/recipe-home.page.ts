import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.page.html',
  styleUrls: ['./recipe-home.page.scss'],
})
export class RecipeHomePage implements OnInit {
    
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

  ngOnInit() {
    console.log("Starting to load...");
        this.recipeService.preload();
        console.log("Finished.");
  }

}
