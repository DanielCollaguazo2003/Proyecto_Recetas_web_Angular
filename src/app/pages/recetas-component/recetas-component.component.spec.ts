import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasComponentComponent } from './recetas-component.component';

describe('RecetasComponentComponent', () => {
  let component: RecetasComponentComponent;
  let fixture: ComponentFixture<RecetasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasComponentComponent]
    });
    fixture = TestBed.createComponent(RecetasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
