import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {projecttype} from 'src/app/dummy/dummy';
@Component({
  selector: 'app-condo',
  templateUrl: './condo.component.html',
  styleUrls: ['./condo.component.scss']
})
export class CondoComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this._buildform();
  }
  _buildform():void{
    this.firstFormGroup = this.fb.group({
      size:[null],
      unittype:[null],
      nofloor:[null],
      lot:[null],
      projecttype:projecttype.condo
    });
    this.secondFormGroup = this.fb.group({
      budget:[null],
      location:[null],
      facility:[null],
      purpose:[null],
      partaing:[null]
    })
  }

}
