import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparticipationComponent } from './listeparticipation.component';

describe('ListeparticipationComponent', () => {
  let component: ListeparticipationComponent;
  let fixture: ComponentFixture<ListeparticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeparticipationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeparticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
