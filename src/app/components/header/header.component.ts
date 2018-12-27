import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }
  @Output() navToggle = new EventEmitter<boolean>();

  ngOnInit() {
  }
  navOpen() {
    this.navToggle.emit(true);
  }
}
