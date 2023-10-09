import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetelecomRoutingModule } from './retelecom-routing.module';
import { RetelecomComponent } from './retelecom.component';
import { RetelecomEditPurchaseComponent } from './retelecom-purchases/retelecom-edit-purchase/retelecom-edit-purchase.component';
import { RetelecomNewPurchaseComponent } from './retelecom-purchases/retelecom-new-purchase/retelecom-new-purchase.component';
import { RetelecomNewSaleComponent } from './retelecom-sales/retelecom-new-sale/retelecom-new-sale.component';
import { RetelecomEditSaleComponent } from './retelecom-sales/retelecom-edit-sale/retelecom-edit-sale.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRetelecomComponent } from './dashboard-retelecom/dashboard-retelecom.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    RetelecomComponent,
    RetelecomEditPurchaseComponent,
    RetelecomNewPurchaseComponent,
    RetelecomNewSaleComponent,
    RetelecomEditSaleComponent,
    DashboardRetelecomComponent
  ],
  imports: [
    CommonModule,
    RetelecomRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule, // Agrega BrowserAnimationsModule
    MatMenuModule, // Agrega MatMenuModule
  
    SharedModule
  ]
})
export class RetelecomModule { }
