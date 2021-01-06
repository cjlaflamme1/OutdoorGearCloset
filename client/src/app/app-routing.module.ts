import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RentalsComponent } from './rentals/rentals.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'rentals', component: RentalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
