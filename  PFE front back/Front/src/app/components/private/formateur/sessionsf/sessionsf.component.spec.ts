import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsfComponent } from './sessionsf.component';

describe('SessionsfComponent', () => {
  let component: SessionsfComponent;
  let fixture: ComponentFixture<SessionsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
