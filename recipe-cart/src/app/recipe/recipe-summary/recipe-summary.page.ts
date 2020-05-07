import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.page.html',
  styleUrls: ['./recipe-summary.page.scss'],
})
export class RecipeSummaryPage implements OnInit {

  /**
   * The recipe information.
   */
  public recipe: any = null;

  constructor( private cacheService: CacheService ) { }

  ngOnInit() {
    // We've stored the recipe inside this service
    // and will now access it for use.
    this.recipe = this.cacheService.get();
  }

}
