import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscStudentsComponent } from './msc-students.component';

describe('MscStudentsComponent', () => {
  let component: MscStudentsComponent;
  let fixture: ComponentFixture<MscStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
