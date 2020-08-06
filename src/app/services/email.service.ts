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
    //this.http.post<any>("https://localhost/emailsender/enviar", JSON.stringify(paquete.destinatario), this.httpOptions);
  }

 
}
