import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from "./auth-components/sign-in/sign-in.component";


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Auth",
      urls: [{ title: "Auth", url: "/auth" }, { title: "Auth" }],
    },
    component: AuthComponent,
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
    SignInComponent
  ],
})
export class AuthModule {}
