import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ComprasComponent } from 'src/app/compras/compras.component';
import { VentasComponent } from 'src/app/ventas/ventas.component';
// import { ComponentComponent } from 'src/app/component/component.component';
import { AboutComponent } from 'src/app/about/about.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AlquilerComponent } from 'src/app/alquiler/alquiler.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: LayoutComponent,
  //   loadChildren: () => import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'alquiler', component: AlquilerComponent },
      // { path: 'component', component: ComponentComponent },
      { path: 'about', component: AboutComponent },
      
      { path: '**', redirectTo: 'error/404' },
    ],
  },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
