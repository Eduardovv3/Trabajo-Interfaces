import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { SalesRatioComponent } from "./compras-components/sales-ratio/sales-ratio.component";
import { FeedsComponent } from "./compras-components/feeds/feeds.component";
import { TopSellingComponent } from "./compras-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./compras-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./compras-components/blog-cards/blog-cards.component";
import { NavBarComponents } from "./compras-components/navBar/navBar.component";
import { ComprasComponent } from "./compras.component";


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Compras",
      urls: [{ title: "Compras", url: "/compras" }, { title: "Compras" }],
    },
    component: ComprasComponent,
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
    ComprasComponent,
    SalesRatioComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    NavBarComponents
  ],
})
export class ComprasModule {}
