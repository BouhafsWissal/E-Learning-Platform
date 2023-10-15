import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefileComponent } from './listefile.component';

describe('ListefileComponent', () => {
  let component: ListefileComponent;
  let fixture: ComponentFixture<ListefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
