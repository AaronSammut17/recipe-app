import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.page.html',
  styleUrls: ['./recipe-ingredients.page.scss'],
})
export class RecipeIngredientsPage implements OnInit {

  /**
   * The recipe information available to the page.
   */
  public recipe: any = null;

  constructor( private cacheService: CacheService) { }

  ngOnInit() {
    this.recipe = this.cacheService.get();
    console.log(this.recipe);
  }

}
