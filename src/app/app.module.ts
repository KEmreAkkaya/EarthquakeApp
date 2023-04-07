import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DepremformComponent } from './components/earthquakeform/earthquakeform.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { EarthquakeDonationSitesComponent } from './components/earthquake-donation-sites/earthquake-donation-sites.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminpanelControlComponent } from './components/adminpanel-control/adminpanel-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DepremformComponent,
    HomeComponent,
    AdminpanelComponent,
    UserComponent,
    AdminComponent,
    EarthquakeDonationSitesComponent,
    ContactComponent,
    MapComponent,
    UserListComponent,
    AdminpanelControlComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
