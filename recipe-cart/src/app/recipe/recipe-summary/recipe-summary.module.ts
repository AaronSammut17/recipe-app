import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeSummaryPageRoutingModule } from './recipe-summary-routing.module';

import { RecipeSummaryPage } from './recipe-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeSummaryPageRoutingModule
  ],
  declarations: [RecipeSummaryPage]
})
export class RecipeSummaryPageModule {}
