import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AenvoyermsgComponent } from './aenvoyermsg.component';

describe('AenvoyermsgComponent', () => {
  let component: AenvoyermsgComponent;
  let fixture: ComponentFixture<AenvoyermsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AenvoyermsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AenvoyermsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
