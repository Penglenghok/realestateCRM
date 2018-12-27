import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoaderPlaceholderComponent } from './components/loader-placeholder/loader-placeholder.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { APP_SERVICES } from './services/index';
import { APP_STORES } from './store/index';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MobxAngularModule } from 'mobx-angular';

import "firebase/firestore";
import * as firebase from 'firebase/app';
import { APP_AUTH } from './auth/auth';
import { ClientRegisterComponent } from './pages/client-register/client-register.component';
import { ProjectComponent } from './pages/project/project.component';
import { CondoComponent } from './pages/condo/condo.component';
import { LandedhouseComponent } from './pages/landedhouse/landedhouse.component';
firebase.initializeApp(environment.firebase);
const fdb = firebase.firestore();
fdb.settings({ timestampsInSnapshots: true });

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    PrimaryButtonComponent,
    SpinnerComponent,
    LoaderPlaceholderComponent,
    SignInComponent,
    ClientRegisterComponent,
    ProjectComponent,
    CondoComponent,
    LandedhouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MobxAngularModule
  ],
  providers: [APP_SERVICES,APP_STORES,APP_AUTH],
  bootstrap: [AppComponent]
})
export class AppModule { }
