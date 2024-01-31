import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { SalesRatioComponent } from "./ventas-components/sales-ratio/sales-ratio.component";
import { FeedsComponent } from "./ventas-components/feeds/feeds.component";
import { TopSellingComponent } from "./ventas-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./ventas-components/top-cards/top-cards.component";
import { NavBarComponent } from "./ventas-components/navBar/navBar.component";
import { VentasComponent } from "./ventas.component";
import { FormComponent } from "./ventas-components/form/form.component";


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Ventas",
      urls: [{ title: "Ventas", url: "/ventas" }, { title: "Ventas" }],
    },
    component: VentasComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    VentasComponent,
    SalesRatioComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    FormComponent,
    NavBarComponent
  ],
})
export class VentasModule {}
