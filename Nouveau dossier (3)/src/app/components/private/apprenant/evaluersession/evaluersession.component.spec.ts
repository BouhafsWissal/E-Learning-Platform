import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluersessionComponent } from './evaluersession.component';

describe('EvaluersessionComponent', () => {
  let component: EvaluersessionComponent;
  let fixture: ComponentFixture<EvaluersessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluersessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluersessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
