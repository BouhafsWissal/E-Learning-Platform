import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerecllamationComponent } from './listerecllamation.component';

describe('ListerecllamationComponent', () => {
  let component: ListerecllamationComponent;
  let fixture: ComponentFixture<ListerecllamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerecllamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerecllamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
