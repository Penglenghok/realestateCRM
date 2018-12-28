import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import {ClientKey} from 'src/app/interface/client';
import { Client } from 'src/app/store/client.store';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private db:AngularFirestore,
    private router:Router,
    public register:Client,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this._buildform();
  }
  _buildform(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      displayname: [null, Validators.required],
      age: [null, Validators.required],
      nationality: [null, Validators.required],
      email: [null, Validators.required],
      career: [null, Validators.required],
      socialmedia: [null],
      telphone: [null, Validators.required],
      referral: [null, Validators.required],
      spacialnote:[null]
    });
  }


  _save(f:any,isNew){
      if(this.form.valid){
        const key = this.db.createId();
        const item:ClientKey={
          key:key,
          name:f.name,
          displayname:f.displayname,
          age:f.age,
          nationality:f.nationality,
          email:f.email,
          career:f.career,
          socialmedial:f.socialmedia,
          telphone:f.telphone,
          referral:f.referral,
          spcialnote:f.spacialnote
        };
        this.register.addData(item,(success,error)=>{
          if (success) {
            if(!isNew){
              this.router.navigate(['/app/client-register/' + key])
            }
            this.form.reset();
            this.snackBar.open("Client Added.", "done", { duration: 2000 });
          } else {
            alert(error);
          }
        });
      }

  }



}
