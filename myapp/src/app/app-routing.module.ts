import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest/guest.component';
import { GsongdetailsComponent } from './guest/gsongdetails/gsongdetails.component';
import { GsonglistComponent } from './guest/gsonglist/gsonglist.component';
import { LoginComponent } from './login/login.component';
import { LogindetailsComponent } from './login/logindetails/logindetails.component';
import { RegisterComponent } from './login/register/register.component';
import { UserComponent } from './user/user.component';
import { UsonglistComponent } from './user/usonglist/usonglist.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { 
    path: 'guest', component: GuestComponent, children: [
      { path: '', component: GsonglistComponent },
      { path: 'review', component: GsongdetailsComponent }
    ]
  },
  { 
    path: 'login', component: LoginComponent, children: [
      { path: '', component: LogindetailsComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { 
    path: 'user', component: UserComponent, children: [
      { path: '', component: UsonglistComponent },
    ],canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
