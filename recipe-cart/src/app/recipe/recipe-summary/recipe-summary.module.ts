import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeSummaryPageRoutingModule } from './recipe-summary-routing.module';

import { RecipeSummaryPage } from './recipe-summary.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeSummaryPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [RecipeSummaryPage]
})
export class RecipeSummaryPageModule {}
