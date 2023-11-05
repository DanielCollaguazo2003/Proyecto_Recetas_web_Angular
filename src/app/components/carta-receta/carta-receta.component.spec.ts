import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaRecetaComponent } from './carta-receta.component';

describe('CartaRecetaComponent', () => {
  let component: CartaRecetaComponent;
  let fixture: ComponentFixture<CartaRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaRecetaComponent]
    });
    fixture = TestBed.createComponent(CartaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
