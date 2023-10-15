import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessessionsComponent } from './messessions.component';

describe('MessessionsComponent', () => {
  let component: MessessionsComponent;
  let fixture: ComponentFixture<MessessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
