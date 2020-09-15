import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEnviosComponent } from './contenido-envios.component';

describe('PesoTransportadoComponent', () => {
  let component: ContenidoEnviosComponent;
  let fixture: ComponentFixture<ContenidoEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
