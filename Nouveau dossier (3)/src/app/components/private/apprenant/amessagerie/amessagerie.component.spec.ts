import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmessagerieComponent } from './amessagerie.component';

describe('AmessagerieComponent', () => {
  let component: AmessagerieComponent;
  let fixture: ComponentFixture<AmessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
