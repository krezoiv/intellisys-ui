// Importar los módulos necesarios de Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes relacionados con las compras y ventas de Redesis
import { RedesisNewPurchaseComponent } from './redesis-purchases/redesis-new-purchase/redesis-new-purchase.component';
import { RedesisEditPurchaseComponent } from './redesis-purchases/redesis-edit-purchase/redesis-edit-purchase.component';
import { RedesisNewSaleComponent } from './redesis-sales/redesis-new-sale/redesis-new-sale.component';
import { RedesisEditSaleComponent } from './redesis-sales/redesis-edit-sale/redesis-edit-sale.component';

// Importar otros componentes y guardias necesarios
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { RedesisComponent } from './redesis.component';

// Definir las rutas para la funcionalidad de Redesis
const routes: Routes = [
  {
    path: 'redesis-purchases',
    children: [
      { path: 'edit/:id', component: RedesisEditPurchaseComponent },
      { path: 'new', component: RedesisNewPurchaseComponent },
    ],
  },
  {
    path: 'redesis-sales',
    children: [
      { path: 'edit/:id', component: RedesisEditSaleComponent },
      { path: 'new', component: RedesisNewSaleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configurar las rutas secundarias para el módulo Redesis
  exports: [RouterModule], // Exportar el módulo de enrutamiento para su uso en la aplicación
})
export class RedesisRoutingModule { }