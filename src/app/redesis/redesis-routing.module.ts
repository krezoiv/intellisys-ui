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
    path: 'Compras', // Ruta principal para Redesis
    component: RedesisComponent, // Componente principal para Redesis
    canActivate: [AuthGuard], // Guardia de autenticación para proteger las rutas
    children: [
      // Rutas secundarias para compras de Redesis
      //{ path: '', component: RedesisComponent }, // Ruta por defecto
      { path: 'NuevaCompra', component: RedesisNewPurchaseComponent }, // Ruta para crear una nueva compra
      { path: 'EditarCompra', component: RedesisEditPurchaseComponent }, // Ruta para editar una compra existente
    ],
  },
  {
    path: 'Ventas', // Ruta principal para Redesis (se repite)
    component: RedesisComponent, // Componente principal para Redesis (se repite)
    canActivate: [AuthGuard], // Guardia de autenticación para proteger las rutas (se repite)
    children: [
      // Rutas secundarias para ventas de Redesis
      { path: '', component: RedesisComponent }, // Ruta por defecto (se repite)
      { path: 'NuevaVenta', component: RedesisNewSaleComponent }, // Ruta para crear una nueva venta
      { path: 'EditarVenta', component: RedesisEditSaleComponent }, // Ruta para editar una venta existente
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configurar las rutas secundarias para el módulo Redesis
  exports: [RouterModule], // Exportar el módulo de enrutamiento para su uso en la aplicación
})
export class RedesisRoutingModule { }