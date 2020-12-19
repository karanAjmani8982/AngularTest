import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './auth.guard';

const routes:Routes = [
  {path : '',redirectTo : '/login-page' , pathMatch : 'full'},
  {path : 'login-page', component : LoginPageComponent},
  {path : 'menu', component : MenuComponent,canActivate : [AuthGuard]},
  {path : 'form', component : FormComponent,canActivate: [AuthGuard]},
  { path: "**", redirectTo: '/login-page', canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
