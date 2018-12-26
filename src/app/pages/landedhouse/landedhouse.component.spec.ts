import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandedhouseComponent } from './landedhouse.component';

describe('landedhouseComponent', () => {
  let component: LandedhouseComponent;
  let fixture: ComponentFixture<LandedhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandedhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandedhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
