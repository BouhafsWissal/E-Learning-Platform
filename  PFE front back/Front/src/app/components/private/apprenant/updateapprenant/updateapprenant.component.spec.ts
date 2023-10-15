import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateapprenantComponent } from './updateapprenant.component';

describe('UpdateapprenantComponent', () => {
  let component: UpdateapprenantComponent;
  let fixture: ComponentFixture<UpdateapprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateapprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
