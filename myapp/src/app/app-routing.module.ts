import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { GuestComponent } from './guest/guest.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent },              
  { path: 'guest', component: GuestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
