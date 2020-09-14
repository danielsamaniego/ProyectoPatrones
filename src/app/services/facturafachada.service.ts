import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { EmailService } from './email.service';
import { PrinterService } from './printer.service';

@Injectable({
  providedIn: 'root'
})
export class FacturafachadaService {

  constructor(private servicioPrinter:PrinterService, private servicioEmail:EmailService) { }

  generarFactura(correo:string, factura:Factura){
    this.servicioPrinter.imprimirFactura(factura);
    this.servicioEmail.enviarFactura(correo,factura);

  }
}
