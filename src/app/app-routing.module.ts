import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ClientRegisterComponent } from './pages/client-register/client-register.component';
import { CondoComponent } from './pages/condo/condo.component';
import { LandedhouseComponent } from './pages/landedhouse/landedhouse.component';

const routes: Routes = [
  {
    path: "signin",
    component: AuthLayoutComponent,
    children: [
      { path: "", component: SignInComponent }
    ]
  },
  {

    path:"",
    component:LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {path:"",component:HomeComponent},
      {path:'register',component:ClientRegisterComponent},
      {path:'condo',component:CondoComponent},
      {path:'landedhouse',component:LandedhouseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
