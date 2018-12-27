import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/store/auth.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:Auth){ }

  ngOnInit() {
  }

}
