import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { AlquilerComponent } from "./alquiler.component";
import { SalesRatioComponent } from "./alquiler-components/sales-ratio/sales-ratio.component";
import { FeedsComponent } from "./alquiler-components/feeds/feeds.component";
import { TopSellingComponent } from "./alquiler-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./alquiler-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./alquiler-components/blog-cards/blog-cards.component";
import { NavBarComponent } from "./alquiler-components/navBar/navBar.component";
import { FilterComponent } from "./alquiler-components/filter/filter.component";
<<<<<<< HEAD
=======
import { CarCardComponent } from "../dashboard/dashboard-components/car-card/car-card.component";

>>>>>>> 1e86284f8fa3e055904627acddb306bb0f04e497


const routes: Routes = [
  {
    path: "",
    data: {
<<<<<<< HEAD
      title: "Compras",
      urls: [{ title: "Compras", url: "/compras" }, { title: "Compras" }],
=======
      title: "Alquiler",
      urls: [{ title: "Alquiler", url: "/alquiler" }, { title: "Compras" }],
>>>>>>> 1e86284f8fa3e055904627acddb306bb0f04e497
    },
    component: AlquilerComponent,
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
    AlquilerComponent,
    SalesRatioComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    NavBarComponent,
<<<<<<< HEAD
    FilterComponent
  ],
})
export class ComprasModule {}
=======
    FilterComponent,
    CarCardComponent
  ],
})
export class AlquilerModule {}
>>>>>>> 1e86284f8fa3e055904627acddb306bb0f04e497
