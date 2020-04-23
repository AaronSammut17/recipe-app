import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
