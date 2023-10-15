import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableevaluationComponent } from './tableevaluation.component';

describe('TableevaluationComponent', () => {
  let component: TableevaluationComponent;
  let fixture: ComponentFixture<TableevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
