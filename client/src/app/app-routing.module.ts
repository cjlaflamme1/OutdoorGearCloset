import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RentalsComponent } from './rentals/rentals.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'rentals', component: RentalsComponent},
  { path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
