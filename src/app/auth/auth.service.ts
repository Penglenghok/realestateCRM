import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from "rxjs";
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  signUp(f:any){
    this.afAuth.auth.createUserWithEmailAndPassword(f.email,f.passsword);
  }

  getUser(){
    return this.afAuth.auth.currentUser
  }

  login(email,password) {
   return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
