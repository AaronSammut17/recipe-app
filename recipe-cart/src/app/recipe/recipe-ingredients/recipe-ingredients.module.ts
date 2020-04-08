import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeIngredientsPageRoutingModule } from './recipe-ingredients-routing.module';

import { RecipeIngredientsPage } from './recipe-ingredients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeIngredientsPageRoutingModule
  ],
  declarations: [RecipeIngredientsPage]
})
export class RecipeIngredientsPageModule {}
