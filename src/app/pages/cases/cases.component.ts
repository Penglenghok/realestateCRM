
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/store/client.store';
import { MatSnackBar } from '@angular/material';
import { markets } from '../../dummy/dummy';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  clientKey=null;
  form: FormGroup;
  marketType:AbstractControl;
  markets=markets;

  constructor(private fb: FormBuilder,
    private db:AngularFirestore,
    private router:Router,
    private route:ActivatedRoute,
    public store:Client,
    private snackBar: MatSnackBar,) {}

  ngOnInit() {
    this._buildform();
    this.route.params.forEach(params=>{
      this.clientKey=params["id"];
      this.store.fetchClient(this.clientKey);
    })
  }

  _buildform(): void {
    this.form=this.fb.group({
      marketType:[],
    });
    this.marketType=this.form.contains["marketType"]
  }
  _onChanged(event){
    if(event.value.key=='1'){
      console.log('1');
      this.router.navigate(['cases/'+this.clientKey+'/primary'])
    }
    else{
      console.log('2');
      this.router.navigate(['cases/'+this.clientKey+'/secondary'])
    }
  }


}
