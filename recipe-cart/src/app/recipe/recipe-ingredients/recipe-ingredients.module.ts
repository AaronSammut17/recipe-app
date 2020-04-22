import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeIngredientsPageRoutingModule } from './recipe-ingredients-routing.module';

import { RecipeIngredientsPage } from './recipe-ingredients.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeIngredientsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [RecipeIngredientsPage]
})
export class RecipeIngredientsPageModule {}
