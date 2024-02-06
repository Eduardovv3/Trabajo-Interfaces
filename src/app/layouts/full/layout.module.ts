import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SalesRatioComponent } from 'src/app/compras/compras-components/sales-ratio/sales-ratio.component';
import { FeedsComponent } from 'src/app/compras/compras-components/feeds/feeds.component';
import { TopSellingComponent } from 'src/app/compras/compras-components/top-selling/top-selling.component';
import { TopCardsComponent } from 'src/app/compras/compras-components/top-cards/top-cards.component';
import { BlogCardsComponent } from 'src/app/compras/compras-components/blog-cards/blog-cards.component';
import { ComprasComponent } from 'src/app/compras/compras.component';
import { NavBarComponent } from 'src/app/ventas/ventas-components/navBar/navBar.component';
import { FormComponent } from 'src/app/ventas/ventas-components/form/form.component';
import { VentasComponent } from 'src/app/ventas/ventas.component';
import { CarCardComponent } from 'src/app/dashboard/dashboard-components/car-card/car-card.component';
import { FilterComponent } from 'src/app/compras/compras-components/filter/filter.component';
@NgModule({
  imports: [LayoutRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot(),

    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgApexchartsModule,
  ],
  declarations: [
    DashboardComponent,
    SalesRatioComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    ComprasComponent,
    VentasComponent,
    NavBarComponent,
    FilterComponent,
    FormComponent,
    CarCardComponent
  ],
})
export class LayoutModule {}
