import { Injectable } from '@angular/core';
import { Paquete } from '../models/paquete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';
import { ConfiguracionMailServer } from './ConfiguracionMailServer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  configuracionMailServer: ConfiguracionMailServer = ConfiguracionMailServer.getConfiguracionMailServer();

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Allow: 'GET, POST, HEAD'
    })
  };

  constructor(private http:HttpClient) { }

  //POST
  public enviarNotificacion(paquete:Paquete){
    //enviar mensaaje al destinatario
    console.log("Notificacione Enviada")
    this.http.post<any>("http://localhost:3000/send-email", {
      "email": paquete.destinatario.correo,
      "message": "Su paquete acaba de ser enviado",
      "transporter_config":this.configuracionMailServer.transporter_config,
      "email_config":this.configuracionMailServer.email_config
    }).subscribe(
      (data) => { // Success
        console.log("Envio Exitoso")
      },
      (error) => {
        console.error(error);
      }
    );
  
  }
  //POST
  public enviarFactura(correo:string,factura:Factura){
    let total = 0;
    let detalles = "";
    factura.detalles.forEach(detalle=>{
      total+=detalle.valor;
      detalles+=" > "+detalle.detalle+" : "+detalle.valor+"$\n"
    })

    //enviar mensaaje al destinatario
    console.log("Notificacione Enviada")
    this.http.post<any>("http://localhost:3000/send-email", {
      "email": correo,
      "message": "Factura:\n"+
      "--------------------------------------------------------\n"+
      "Numero: "+factura.numero+"\n"+
      "Fecha: "+factura.fecha+"\n"+
      "Cliente: "+factura.cliente+"\n"+
      "Cédula: "+factura.cedula+"\n"+
      "Teléfono: "+factura.celular+"\n"+
      "Dirección: "+factura.direccion+"\n"+
      "---------------------------------------------------------\n"+
      "Descripción del Paquete: "+factura.paquete.descripcion+"\n"+
      "Valor del Paquete: "+factura.paquete.valor+"\n"+
      "---------------------------------------------------------\n"+
      detalles+
      "---------------------------------------------------------\n"+
      " TOTAL: "+total+"$\n",
      "transporter_config":this.configuracionMailServer.transporter_config,
      "email_config":this.configuracionMailServer.email_config

    }).subscribe(
      (data) => { // Success
        console.log("Envio Exitoso")
      },
      (error) => {
        console.error(error);
      }
    );
  
  }

 
}
