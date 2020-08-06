import { Component, OnInit } from '@angular/core';
import { PaqueteBuilder } from '../models/PaqueteBuilder';
import { Paquete } from '../models/paquete';
import { PaquetefachadaService } from '../services/paquetefachada.service';

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


  constructor(private paqueteService:PaquetefachadaService) {
    this.paqueteBuilder = new PaqueteBuilder()
   }

  ngOnInit() {
    /*
    this.paqueteBuilder.setDescripcion("Descripción");
    this.paqueteBuilder.setDestinatario("Daniel Samaniego","0604178541","dannysv14647010dev@gmail.com")
    this.paqueteBuilder.setDireccionDestino("Ecuador","Riobamba","calle 16 y33")
    this.paqueteBuilder.setDireccionOrigen("Ecuador","Otavalo","calle 11 y 22")
    this.paqueteBuilder.setNumeroRastreo('001')
    this.paqueteBuilder.setPeso(3)
    this.paqueteBuilder.setRemitente("Carlos Samaniego","0604178577","dannysv14647010@gmail.com")
    this.paqueteBuilder.setTelefonoDestinatario("0992678029","Claro")
    this.paqueteBuilder.setTelefonoRemitente("0992678222","Tuenti")
    this.paqueteBuilder.setValor(100)
    let paquete_prueba = this.paqueteBuilder.construirPaquete();
    console.log(paquete_prueba)
    */
  }

  cotizar(){

    // VALIDAR CAMPOS VACIOS
    this.paqueteBuilder.setDescripcion(this.descripcion);
    this.paqueteBuilder.setDestinatario(this.nombre_destinatario,this.cedula_destinatario,this.correo_destinatario)
    this.paqueteBuilder.setDireccionDestino(this.pais_destino,this.ciudad_destino,this.calle_destino)
    this.paqueteBuilder.setDireccionOrigen(this.pais_origen,this.ciudad_origen,this.calle_origen)
    this.paqueteBuilder.setPeso(this.peso)
    this.paqueteBuilder.setRemitente(this.nombre_remitente,this.cedula_remitente,this.correo_remitente)
    this.paqueteBuilder.setTelefonoDestinatario(this.telefono_destinatario,this.operadora_destinatario)
    this.paqueteBuilder.setTelefonoRemitente(this.operadora_remitente,this.operadora_remitente)
    this.paqueteBuilder.setValor(this.valor)
    this.paquete = this.paqueteBuilder.construirPaquete();
    console.log(this.paquete)
    console.log('dadasdas')
    this.cotizado = true
    console.log()
    
  }

  confirmar(){
    this.paqueteService.registrarPaquetes(this.paquete);
    //GUARDAR PAQUETE
  }

}
