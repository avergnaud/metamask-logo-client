import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonLogoComponent } from './mon-logo.component';

describe('MonLogoComponent', () => {
  let component: MonLogoComponent;
  let fixture: ComponentFixture<MonLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
