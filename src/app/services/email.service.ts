import { Injectable } from '@angular/core';
import { Paquete } from '../models/paquete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

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
    this.http.post<any>("http://localhost:3001/send-email", {
      "email": paquete.destinatario.correo
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
