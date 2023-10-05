import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetelecomNewPurchaseComponent } from './retelecom-purchases/retelecom-new-purchase/retelecom-new-purchase.component';
import { RetelecomEditPurchaseComponent } from './retelecom-purchases/retelecom-edit-purchase/retelecom-edit-purchase.component';
import { RetelecomNewSaleComponent } from './retelecom-sales/retelecom-new-sale/retelecom-new-sale.component';
import { RetelecomEditSaleComponent } from './retelecom-sales/retelecom-edit-sale/retelecom-edit-sale.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'Retelecom-Compras',
    children: [
      { path: 'EditarCompra', component: RetelecomEditPurchaseComponent },
      { path: 'NuevaCompra', component: RetelecomNewPurchaseComponent },
    ],
  },
  {
    path: 'retelecom-ventas',
    children: [
      { path: 'editar', component: RetelecomEditSaleComponent },
      { path: 'nueva', component: RetelecomNewSaleComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetelecomRoutingModule { }


