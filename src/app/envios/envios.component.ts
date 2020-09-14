import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { PaqueteBuilder } from '../models/PaqueteBuilder';
import { Paquete } from '../models/paquete';
import { AngularFireList } from 'angularfire2/database';
import { PaquetefachadaService } from '../services/paquetefachada.service';
import { FacturaBuilder } from '../models/FacturaBuilder';
import { Factura } from '../models/factura';
import { FacturafachadaService } from '../services/facturafachada.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  private facturaBuilder:FacturaBuilder

  public envios:Array<any>;
  
  constructor(private paqueteFachadaService:PaquetefachadaService, private facturaFachadaService:FacturafachadaService) {

    this.paqueteFachadaService.obtenerPaquetes().snapshotChanges().subscribe(item => {
      this.envios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;

        this.envios.push(x as Paquete);
      });
    });

    this.facturaBuilder = new FacturaBuilder();
   }

  ngOnInit() {
    
  }
  generarFactura(paquete:Paquete){
    this.facturaBuilder.setNumero(paquete.$key);
    this.facturaBuilder.setValor(paquete.valor);
    this.facturaBuilder.setFecha(new Date(paquete.fecha));
    this.facturaBuilder.setDireccion(paquete.remitente.direccion.pais +" "+paquete.remitente.direccion.ciudad+ " "+paquete.remitente.direccion.calles  );
    this.facturaBuilder.setDescripcion(paquete.descripcion);
    this.facturaBuilder.setCliente(paquete.remitente.nombre);
    this.facturaBuilder.setCelular(paquete.remitente.telefono.numero);
    this.facturaBuilder.setCedula(paquete.remitente.cedula);

    this.facturaBuilder.agregarDetalle("advalorem",paquete.costos_envio.advalorem);
    this.facturaBuilder.agregarDetalle("envio",paquete.costos_envio.envio);
    this.facturaBuilder.agregarDetalle("fodinfa",paquete.costos_envio.fodinfa);
    this.facturaBuilder.agregarDetalle("iva",paquete.costos_envio.iva);
    
    let factura:Factura =  this.facturaBuilder.construirPaquete();

    this.facturaFachadaService.generarFactura(paquete.remitente.correo,factura);

  }

}
