import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesOrigenComponent } from './paises-origen.component';

describe('PaisesOrigenComponent', () => {
  let component: PaisesOrigenComponent;
  let fixture: ComponentFixture<PaisesOrigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesOrigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
