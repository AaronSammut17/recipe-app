import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-recipe-directions',
  templateUrl: './recipe-directions.page.html',
  styleUrls: ['./recipe-directions.page.scss'],
})
export class RecipeDirectionsPage implements OnInit {

  /**
   * The recipe information available to the page.
   */
  public recipe: any = null;

  constructor( private cacheService: CacheService) { }

  ngOnInit() {
    this.recipe = this.cacheService.get();
  }

}
