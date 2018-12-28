import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) { }

  registerRef() {
    return this.db.collection('register')
  }
  userRef(uid) {
    return this.db.collection('users').doc<any>(uid);
  }
}
