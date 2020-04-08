import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeTabsPageRoutingModule } from './recipe-tabs-routing.module';

import { RecipeTabsPage } from './recipe-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeTabsPageRoutingModule
  ],
  declarations: [RecipeTabsPage]
})
export class RecipeTabsPageModule {}
