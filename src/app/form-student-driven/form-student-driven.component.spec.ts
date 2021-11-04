import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentDrivenComponent } from './form-student-driven.component';

describe('FormStudentDrivenComponent', () => {
  let component: FormStudentDrivenComponent;
  let fixture: ComponentFixture<FormStudentDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStudentDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStudentDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
