import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ComprasComponent } from '../compras/compras.component';
import { VentasComponent } from '../ventas/ventas.component';
import { AboutComponent } from '../about/about.component';
// import { ComponentComponent } from '../component/component.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'compras', component: ComprasComponent },
  //     { path: 'ventas', component: VentasComponent },
  //     // { path: 'component', component: ComponentComponent },
  //     { path: 'about', component: AboutComponent },
      
  //     { path: '**', redirectTo: 'error/404' },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
