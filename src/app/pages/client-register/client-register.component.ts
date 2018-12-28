import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import {ClientKey} from 'src/app/interface/client';
import { Client } from 'src/app/store/client.store';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-client-register",
  templateUrl: "./client-register.component.html",
  styleUrls: ["./client-register.component.scss"]
})
export class ClientRegisterComponent implements OnInit {
  clientKey:string;
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private db:AngularFirestore,
    private router:Router,
    private route:ActivatedRoute,
    public store:Client,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this._buildform();
    this.route.params.forEach(params=>{
      this.clientKey=params["id"];
      this.store.fetchClient(this.clientKey);
    })
  }

  _buildform(): void {
  }




}
