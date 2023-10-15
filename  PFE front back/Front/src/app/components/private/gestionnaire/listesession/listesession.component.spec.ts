import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesessionComponent } from './listesession.component';

describe('ListesessionComponent', () => {
  let component: ListesessionComponent;
  let fixture: ComponentFixture<ListesessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
