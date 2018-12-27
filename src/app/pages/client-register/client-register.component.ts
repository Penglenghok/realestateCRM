import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import {ClientKey} from 'src/app/interface/client';
import { Client } from 'src/app/store/client.store';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: "app-client-register",
  templateUrl: "./client-register.component.html",
  styleUrls: ["./client-register.component.scss"]
})
export class ClientRegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private db:AngularFirestore,public register:Client,private snackBar: MatSnackBar) {}

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
  _save(f:any){
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
            this.snackBar.open("Client Added.", "done", { duration: 2000 });
          } else {
            alert(error);
          }
        });
      }
      
  }
}
