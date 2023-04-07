import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { ContactComponent } from './components/contact/contact.component';
import { DepremformComponent } from './components/earthquakeform/earthquakeform.component';
import { EarthquakeDonationSitesComponent } from './components/earthquake-donation-sites/earthquake-donation-sites.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adminpanel/userlist', component: UserListComponent},
  { path: 'adminpanel/userlist/:id', component: AdminComponent},
  { path: 'yakinbildirimformu', component: DepremformComponent },
  { path: 'adminpanel/map', component: MapComponent},
  //{ path: 'yakinbildiriformu/kaydet', component: DepremformComponent},


  { path: 'depremyardimsiteleri', component: EarthquakeDonationSitesComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'uyekayit', component: RegistrationPageComponent},
  { path: 'uyegiris', component: LoginPageComponent},

  { path: 'admin', component: AdminComponent },
  { path: 'adminpanel', component: AdminpanelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
