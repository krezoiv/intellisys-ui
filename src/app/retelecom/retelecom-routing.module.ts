import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetelecomNewPurchaseComponent } from './retelecom-purchases/retelecom-new-purchase/retelecom-new-purchase.component';
import { RetelecomEditPurchaseComponent } from './retelecom-purchases/retelecom-edit-purchase/retelecom-edit-purchase.component';
import { RetelecomNewSaleComponent } from './retelecom-sales/retelecom-new-sale/retelecom-new-sale.component';
import { RetelecomEditSaleComponent } from './retelecom-sales/retelecom-edit-sale/retelecom-edit-sale.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'Compras',
    canActivate:[AuthGuard],
    children:[
      {path: 'RetelecomNuevaCompra', component: RetelecomNewPurchaseComponent},
      {path: 'RetelecomEditarCompra', component: RetelecomEditPurchaseComponent},
    ],
  },
  {
    path: 'Ventas',
    canActivate:[AuthGuard],
    children:[
      {path: 'RetelecomNuevaVenta', component: RetelecomNewSaleComponent },
      {path: 'RetelecomEditarVenta', component: RetelecomEditSaleComponent}
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetelecomRoutingModule { }


