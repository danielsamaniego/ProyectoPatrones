import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { PaqueteBuilder } from '../models/PaqueteBuilder';
import { Paquete } from '../models/paquete';
@Component({
  selector: 'app-dashboard',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  public envios:Array<Paquete> = new Array<Paquete>();
  
  constructor() { }

  ngOnInit() {
    
    //consultar bd
    let paqueteBuilder = new PaqueteBuilder()
    paqueteBuilder.setDescripcion("Ropa");
    paqueteBuilder.setDestinatario("Daniel Samaniego","0604178541","dannysv14647010dev@gmail.com")
    paqueteBuilder.setDireccionDestino("Ecuador","Riobamba","calle 16 y33")
    paqueteBuilder.setDireccionOrigen("Ecuador","Otavalo","calle 11 y 22")
    paqueteBuilder.setNumeroRastreo('001')
    paqueteBuilder.setPeso(3)
    paqueteBuilder.setRemitente("Carlos Samaniego","0604178577","dannysv14647010@gmail.com")
    paqueteBuilder.setTelefonoDestinatario("0992678029","Claro")
    paqueteBuilder.setTelefonoRemitente("0992678222","Tuenti")
    paqueteBuilder.setValor(100)
    let paquete_prueba = paqueteBuilder.construirPaquete();
    //console.log(paquete_prueba)
    this.envios.push(paquete_prueba)

  }

}
