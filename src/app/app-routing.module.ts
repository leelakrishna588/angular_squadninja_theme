import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { IhdashboardComponent } from './layouts/ihdashboard/ihdashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'ihdashboard',
  component: IhdashboardComponent,
  children: [
    {
     path: '',
     loadChildren: './layouts/ihdashboard/ihdashboard.module#'
   }
 ]
},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
