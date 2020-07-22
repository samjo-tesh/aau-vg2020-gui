import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscGraduatesComponent } from './msc-graduates.component';

describe('MscGraduatesComponent', () => {
  let component: MscGraduatesComponent;
  let fixture: ComponentFixture<MscGraduatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscGraduatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
