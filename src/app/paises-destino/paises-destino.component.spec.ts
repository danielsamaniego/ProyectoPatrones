import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDestinoComponent } from './paises-destino.component';

describe('PaisesDestinoComponent', () => {
  let component: PaisesDestinoComponent;
  let fixture: ComponentFixture<PaisesDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
