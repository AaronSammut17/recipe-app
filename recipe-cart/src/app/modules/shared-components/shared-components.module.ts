import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeHeaderComponent } from 'src/app/recipe/recipe-header/recipe-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  // We are declaring a definition for all of our custom components.
  declarations: [
    RecipeHeaderComponent
  ],
  // Preloads the custom components.
  entryComponents: [
    RecipeHeaderComponent
  ],
  // Makes the custom components accessible to any page that needs them.
  exports: [
    RecipeHeaderComponent
  ],
  imports: [
    // Allows us to use Ionic tags inside our custom components.
    IonicModule,
    CommonModule
  ]
})
export class SharedComponentsModule { }
