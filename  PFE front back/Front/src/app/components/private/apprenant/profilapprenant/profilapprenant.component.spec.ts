import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilapprenantComponent } from './profilapprenant.component';

describe('ProfilapprenantComponent', () => {
  let component: ProfilapprenantComponent;
  let fixture: ComponentFixture<ProfilapprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilapprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
