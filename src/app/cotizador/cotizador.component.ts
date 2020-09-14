import { Component, OnInit } from '@angular/core';
import { PaqueteBuilder } from '../models/PaqueteBuilder';
import { Paquete } from '../models/paquete';
import { PaquetefachadaService } from '../services/paquetefachada.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  private paqueteBuilder:PaqueteBuilder

  numero_rastreo:string
  descripcion:string
  peso:number
  valor:number

  nombre_destinatario:string
  cedula_destinatario:string
  correo_destinatario:string
  telefono_destinatario:string
  operadora_destinatario:string


  nombre_remitente:string
  cedula_remitente:string
  correo_remitente:string
  telefono_remitente:string
  operadora_remitente:string

  pais_origen:string
  ciudad_origen:string
  calle_origen:string

  pais_destino:string
  ciudad_destino:string
  calle_destino:string

  cotizado:boolean = false
  
  gastos_envio:any
  paquete:Paquete 


  constructor(private paqueteService:PaquetefachadaService,private router:Router) {
    this.paqueteBuilder = new PaqueteBuilder()
   }

  ngOnInit() {
  }

  cotizar(){
    if(
      !this.nombre_remitente ||
      !this.cedula_remitente ||
      !this.correo_remitente ||
      !this.telefono_remitente ||
      !this.operadora_remitente ||
      !this.nombre_destinatario ||
      !this.cedula_destinatario ||
      !this.correo_destinatario ||
      !this.telefono_destinatario ||
      !this.operadora_destinatario ||
      !this.pais_origen ||
      !this.calle_destino ||
      !this.pais_destino ||
      !this.ciudad_origen ||
      !this.ciudad_destino ||
      !this.calle_origen ||
      !this.calle_destino ||
      !this.descripcion ||
      !this.peso ||
      !this.valor 
    ){
      window.alert("Complete todos los campos");
      return;
    }

    this.paqueteBuilder.setDescripcion(this.descripcion);
    this.paqueteBuilder.setDestinatario(this.nombre_destinatario,this.cedula_destinatario,this.correo_destinatario)
    this.paqueteBuilder.setDireccionDestino(this.pais_destino,this.ciudad_destino,this.calle_destino)
    this.paqueteBuilder.setDireccionOrigen(this.pais_origen,this.ciudad_origen,this.calle_origen)
    this.paqueteBuilder.setPeso(this.peso)
    this.paqueteBuilder.setRemitente(this.nombre_remitente,this.cedula_remitente,this.correo_remitente)
    this.paqueteBuilder.setTelefonoDestinatario(this.telefono_destinatario,this.operadora_destinatario)
    this.paqueteBuilder.setTelefonoRemitente(this.telefono_remitente,this.operadora_remitente)
    this.paqueteBuilder.setValor(this.valor)
    this.paquete = this.paqueteBuilder.construirPaquete();
    this.cotizado = true
    
  }

  confirmar(){
    this.paquete.fecha = new Date();
    this.paqueteService.registrarPaquetes(this.paquete);
    this.router.navigate(['']);
  }

}
