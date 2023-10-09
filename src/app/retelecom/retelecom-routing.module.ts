import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetelecomNewPurchaseComponent } from './retelecom-purchases/retelecom-new-purchase/retelecom-new-purchase.component';
import { RetelecomEditPurchaseComponent } from './retelecom-purchases/retelecom-edit-purchase/retelecom-edit-purchase.component';
import { RetelecomNewSaleComponent } from './retelecom-sales/retelecom-new-sale/retelecom-new-sale.component';
import { RetelecomEditSaleComponent } from './retelecom-sales/retelecom-edit-sale/retelecom-edit-sale.component';
import { AuthGuard } from '../guards/auth.guard';
import { RetelecomComponent } from './retelecom.component';

const routes: Routes = [
  {
    path: 'retelecom',
    component: RetelecomComponent,
    children: [
      { path: 'Compras/EditarCompra', component: RetelecomEditPurchaseComponent },
      { path: 'Compras/NuevaCompra', component: RetelecomNewPurchaseComponent },
      { path: 'EditarVenta', component: RetelecomEditSaleComponent },
      { path: 'NuevaVenta', component: RetelecomNewSaleComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetelecomRoutingModule { }


