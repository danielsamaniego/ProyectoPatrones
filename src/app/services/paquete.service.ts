import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Paquete } from '../models/paquete'


@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  listaPaquetes: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getPaquetes(){
    return this.listaPaquetes = this.firebase.list('paquetes')
  }
  postPaquetes(paquete: Paquete){
    console.log(paquete)
    this.listaPaquetes = this.firebase.list('paquetes')

    if(paquete.destinatario.direccion.pais != paquete.remitente.direccion.pais){//si es internacional

      this.listaPaquetes.push({
        descripcion:paquete.descripcion,
        fecha:paquete.fecha.toString(),
        remitente:{
          cedula:paquete.remitente.cedula,
          nombre:paquete.remitente.nombre,
          correo:paquete.remitente.correo,
          telefono:{
            numero:paquete.remitente.telefono.numero,
            operadora:paquete.remitente.telefono.operadora
          },
          direccion:{
            pais:paquete.remitente.direccion.pais,
            ciudad:paquete.remitente.direccion.ciudad,
            calles:paquete.remitente.direccion.calles
          }
        },
        destinatario:{
          cedula:paquete.destinatario.cedula,
          nombre:paquete.destinatario.nombre,
          correo:paquete.destinatario.correo,
          telefono:{
            numero:paquete.destinatario.telefono.numero,
            operadora:paquete.destinatario.telefono.operadora
          },
          direccion:{
            pais:paquete.destinatario.direccion.pais,
            ciudad:paquete.destinatario.direccion.ciudad,
            calles:paquete.destinatario.direccion.calles
          }
  
        },
        peso:paquete.peso,
        valor:paquete.valor,
        costos_envio:{
          envio:paquete.costos_envio.envio,
          fodinfa:paquete.costos_envio.fodinfa,
          advalorem:paquete.costos_envio.advalorem,
          iva:paquete.costos_envio.iva
  
        }
      });
    }
    else{
      this.listaPaquetes.push({
        descripcion:paquete.descripcion,
        fecha:paquete.fecha.toString(),
        remitente:{
          cedula:paquete.remitente.cedula,
          nombre:paquete.remitente.nombre,
          correo:paquete.remitente.correo,
          telefono:{
            numero:paquete.remitente.telefono.numero,
            operadora:paquete.remitente.telefono.operadora
          },
          direccion:{
            pais:paquete.remitente.direccion.pais,
            ciudad:paquete.remitente.direccion.ciudad,
            calles:paquete.remitente.direccion.calles
          }
        },
        destinatario:{
          cedula:paquete.destinatario.cedula,
          nombre:paquete.destinatario.nombre,
          correo:paquete.destinatario.correo,
          telefono:{
            numero:paquete.destinatario.telefono.numero,
            operadora:paquete.destinatario.telefono.operadora
          },
          direccion:{
            pais:paquete.destinatario.direccion.pais,
            ciudad:paquete.destinatario.direccion.ciudad,
            calles:paquete.destinatario.direccion.calles
          }
  
        },
        peso:paquete.peso,
        valor:paquete.valor,
        costos_envio:{
          envio:paquete.costos_envio.envio,
          fodinfa:0,
          advalorem:0,
          iva:0
        }
      });
    }
    
  }
}
