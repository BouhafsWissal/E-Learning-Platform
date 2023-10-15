import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategestionnaireComponent } from './updategestionnaire.component';

describe('UpdategestionnaireComponent', () => {
  let component: UpdategestionnaireComponent;
  let fixture: ComponentFixture<UpdategestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
