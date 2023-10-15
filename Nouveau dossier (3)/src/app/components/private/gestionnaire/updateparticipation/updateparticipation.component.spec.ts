import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateparticipationComponent } from './updateparticipation.component';

describe('UpdateparticipationComponent', () => {
  let component: UpdateparticipationComponent;
  let fixture: ComponentFixture<UpdateparticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateparticipationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateparticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
