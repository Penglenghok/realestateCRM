import { observable, action } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class Auth {
  @observable public data;
  @observable public user;
  @observable public isLog = false;

  constructor(private auth: AuthService,
    private router: Router,
    private ds: DataService) {
    this.fetchData();
    this.fetchLog();
  }

  @action
  signOut() {
    this.auth.logout().then(() => {
      this.user = null;
      this.isLog = false;
      this.router.navigate(['/signin']);
    });
  }

  @action
  fetchData() {
    const current = this.auth.getUser();
    if (current) {
      const {uid} = current;
      this.ds.userRef(uid).valueChanges().subscribe(doc => {
        const {displayName, email, role} = doc;
        this.user = {
         uid, email, displayName, role
        };
      });
    }
  }

  @action
  fetchLog() {
   this.auth.isLoggedIn().then((user) => {
     console.log(user);
    this.isLog = user ? true : false;
    }).catch(error => {
      this.isLog = false;
    });
  }

}
