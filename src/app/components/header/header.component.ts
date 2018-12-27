import { Auth } from 'src/app/store/auth.store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: Auth) { }
  @Output() navToggle = new EventEmitter<boolean>();

  ngOnInit() {
  }
  navOpen() {
    this.navToggle.emit(true);
  }
}

