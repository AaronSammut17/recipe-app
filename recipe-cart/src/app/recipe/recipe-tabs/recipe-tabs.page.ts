import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { CacheService } from 'src/app/services/cache.service';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-recipe-tabs',
  templateUrl: './recipe-tabs.page.html',
  styleUrls: ['./recipe-tabs.page.scss'],
})
export class RecipeTabsPage implements OnInit, OnDestroy {

  constructor( public route: ActivatedRoute,
               public alertCtrl: AlertController,
               public router: Router,

               private cacheService: CacheService, 
               private recipeService: RecipeService ) { }

  ngOnInit() {
     // Assigns the current url parameter to a variable.
     var url = this.route.snapshot.params.url;

     // check that the data has been loaded.
     var recipe = this.recipeService.getRecipe(url);

     // Show an error if the recipe is corrupted (or has incoplete IMPORTANT information)
     if (!this.recipeService.checkRecipe(recipe))
        {
          this.showCorruptedAlert();
        }

     // store the information for use by other pages.
     this.cacheService.set(recipe);
  }

  ngOnDestroy(){
    // clear the information since we don't need it anymore
    // when this page is destroyed.
    this.cacheService.clear();
  }

  async showCorruptedAlert(){
    const alert = await this.alertCtrl.create({
      header: "Corrupt Information",
      message: "This recipe appears to be corrupt. Returning to the home screen.",
      buttons: [ "Dismiss"]
    });

    // use an underscore as a parameter for "then" if
    // there is nothing to add to this function (by convention).
    alert.onWillDismiss().then(_ => {
      this.router.navigateByUrl('/');
    });

    await alert.present();
  }
}
