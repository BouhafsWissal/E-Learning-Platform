import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListegestionnaireComponent } from './listegestionnaire.component';

describe('ListegestionnaireComponent', () => {
  let component: ListegestionnaireComponent;
  let fixture: ComponentFixture<ListegestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListegestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListegestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
