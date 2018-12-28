import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { searchFilterBy } from 'src/app/dummy/dummy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form:FormGroup;
  filterBy = searchFilterBy;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      searchType: [this.filterBy[0], [Validators.required]],
      search: [null]
    });
  }

}
