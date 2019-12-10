import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest/guest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { GsongdetailsComponent } from './guest/gsongdetails/gsongdetails.component';
import { GsonglistComponent } from './guest/gsonglist/gsonglist.component';
import { LoginComponent } from './login/login.component';
import { LogindetailsComponent } from './login/logindetails/logindetails.component';
import { RegisterComponent } from './login/register/register.component';
import { UserComponent } from './user/user.component';
import { UsonglistComponent } from './user/usonglist/usonglist.component';
import { UsongdetailsComponent } from './user/usongdetails/usongdetails.component';
import { UaddsongComponent } from './user/uaddsong/uaddsong.component';
import { UaddreviewComponent } from './user/uaddreview/uaddreview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuestComponent,
    GsongdetailsComponent,
    GsonglistComponent,
    LoginComponent,
    LogindetailsComponent,
    RegisterComponent,
    UserComponent,
    UsonglistComponent,
    UsongdetailsComponent,
    UaddsongComponent,
    UaddreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
