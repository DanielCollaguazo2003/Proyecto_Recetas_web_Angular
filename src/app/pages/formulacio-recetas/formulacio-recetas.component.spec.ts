import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulacioRecetasComponent } from './formulacio-recetas.component';

describe('FormulacioRecetasComponent', () => {
  let component: FormulacioRecetasComponent;
  let fixture: ComponentFixture<FormulacioRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulacioRecetasComponent]
    });
    fixture = TestBed.createComponent(FormulacioRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
