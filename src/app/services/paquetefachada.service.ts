import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Paquete } from '../models/paquete';
import { PaqueteService } from './paquete.service';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class PaquetefachadaService {

  constructor(private servicioFirebase:PaqueteService, private servicioEmail:EmailService) { }

  public obtenerPaquetes():AngularFireList<any>{
    return this.servicioFirebase.getPaquetes();
  }
  public registrarPaquetes(paquete:Paquete):void{
      this.servicioFirebase.postPaquetes(paquete);
      this.servicioEmail.enviarNotificacion(paquete);
  }
}
