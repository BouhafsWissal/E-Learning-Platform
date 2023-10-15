import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoyermsgComponent } from './evoyermsg.component';

describe('EvoyermsgComponent', () => {
  let component: EvoyermsgComponent;
  let fixture: ComponentFixture<EvoyermsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoyermsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoyermsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
