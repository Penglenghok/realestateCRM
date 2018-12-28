import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/store/client.store';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

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
