import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { ColorComponent } from './components/color/color.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [ 
  {path: "", pathMatch:"full", component:NaviComponent},

  {path: "cars", component:CarComponent},
  {path: "cars/add", component:AddCarComponent},

  {path: "colors", component:ColorComponent},
  {path: "colors/add", component:AddColorComponent},


  {path: "brands", component:BrandComponent},
  {path: "brands/add", component:AddBrandComponent},

  {path: "rentals", component:RentalComponent},

  {path: "customers", component:CustomerComponent},
  {path: "customers/add", component:AddCustomerComponent},


  {path: "users", component:UserComponent},
  {path: "users/register", component:AddUserComponent},
  {path: "users/login", component:LoginComponent},




  {path: "carDetails", component:CarDetailComponent},
  {path: "carDetails/car/:carId", component:CarDetailComponent},
  {path: "carDetails/brand/:brandId", component:CarDetailComponent},
  {path: "carDetails/color/:colorId", component:CarDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
