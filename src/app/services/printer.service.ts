import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  constructor() { }

  imprimirFactura(factura:Factura){
    
    let total = 0;
    let detalles = "";
    factura.detalles.forEach(detalle=>{
      total+=detalle.valor;
      detalles+="<div> -"+detalle.detalle+" : "+detalle.valor+"$\n </div>"
    })

    let imprimir = "<div>Factura:\n</div>"+
      "<div>--------------------------------------------------------\n</div>"+
      "<div>Numero: "+factura.numero+"\n</div>"+
      "<div>Fecha: "+factura.fecha+"\n</div>"+
      "<div>Cliente: "+factura.cliente+"\n</div>"+
      "<div>Cédula: "+factura.cedula+"\n</div>"+
      "<div>Teléfono: "+factura.celular+"\n</div>"+
      "<div>Dirección: "+factura.direccion+"\n</div>"+
      "<div>---------------------------------------------------------\n</div>"+
      "<div>Descripción del Paquete: "+factura.paquete.descripcion+"\n</div>"+
      "<div>Valor del Paquete: "+factura.paquete.valor+"\n</div>"+
      "<div>---------------------------------------------------------\n</div>"+
      detalles+
      "<div>---------------------------------------------------------\n</div>"+
      "<div> TOTAL: "+total+"$\n</div>"
      console.log("imprimiendo..");
      console.log(imprimir);

      var mywindow = window.open('', 'PRINT', 'height=400,width=600');
      mywindow.document.write('<html><head><title>' + 'Factura'  + '</title>');
      mywindow.document.write(imprimir);

      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      mywindow.close();

  }
}
