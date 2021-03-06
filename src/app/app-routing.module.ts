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
import { CasesComponent } from './pages/cases/cases.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { SecondaryComponent } from './components/secondary/secondary.component';

const routes: Routes = [
  {
    path: "signin",
    component: AuthLayoutComponent,
    children: [{ path: "", component: SignInComponent }]
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: 'client-register', component: ClientRegisterComponent },
      {
        path: 'cases/:id', component: CasesComponent,
        children: [
          { path: 'primary', component: PrimaryComponent },
          { path: 'secondary', component: SecondaryComponent }
        ]
      },
      { path: 'condo', component: CondoComponent },
      { path: 'landedhouse', component: LandedhouseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
