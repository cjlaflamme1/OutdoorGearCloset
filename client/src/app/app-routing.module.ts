import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SearchComponent } from './inventory/search/search.component';
import { RentalsComponent } from './rentals/rentals.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inventory',
   component: InventoryComponent,
  children: [
    {
      path:'search',
      component: SearchComponent
    },
    {
      path:'add',
      component: AddItemComponent
    }
  ]},
  { path: 'rentals', component: RentalsComponent},
  { path: 'customers', 
  component: CustomersComponent,
  children: [
    {
      path:'search',
      component: SearchCustomersComponent
    },
    {
      path:'add',
      component: AddCustomerComponent
    }
  ]
},
  
  // This path, the wildcard, needs to be the last route listed.
  { path: '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
