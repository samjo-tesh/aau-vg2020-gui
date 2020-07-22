import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdGraduatesComponent } from './phd-graduates.component';

describe('PhdGraduatesComponent', () => {
  let component: PhdGraduatesComponent;
  let fixture: ComponentFixture<PhdGraduatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhdGraduatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
