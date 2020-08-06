import { Direccion } from './direccion'
import { Persona } from './persona'
import { Telefono } from './telefono'
import { Paquete } from './paquete'
import { CotizacionEnvioConcreta } from '../cotizador/cotizador_envios/CotizacionEnvioConcreta';
import { CotizacionEnvioIva } from '../cotizador/cotizador_envios/CotizadorIva';
import { CotizacionEnvioAdValorem } from '../cotizador/cotizador_envios/CotizacionAdValorem';
import { CotizacionEnvioFodinfa } from '../cotizador/cotizador_envios/CotizacionEnvioFodinfa';
import { CotizacionEnvioAbstracta } from '../cotizador/cotizador_envios/CotizacionEnvioAbstracta';

export class PaqueteBuilder{

    private remitente:Persona;
    private destinatario:Persona;
    private direccion_remitente:Direccion;
    private direccion_destinatario:Direccion;
    private telefono_remitente:Telefono;
    private telefono_destinatario:Telefono;
    private peso:number;
    private valor:number;
    private descripcion:string;
    
    public  setDescripcion(_descripcion:string):void{
        this.descripcion = _descripcion;
    }

    public  setRemitente(_nombre:string,_cedula:string,_correo:string):void{
        this.remitente = new Persona(_cedula,_nombre,_correo)
    }
    public  setDestinatario(_nombre:string,_cedula:string,_correo:string):void{
        this.destinatario = new Persona(_cedula,_nombre,_correo)
    }

    public  setDireccionOrigen(_pais:string,_ciudad:string,_calles:string):void{
        this.direccion_remitente = new Direccion(_pais,_ciudad,_calles)
    }
    public  setDireccionDestino(_pais:string,_ciudad:string,_calles:string):void{
        this.direccion_destinatario = new Direccion(_pais,_ciudad,_calles)
    }

    public  setTelefonoRemitente(_numero:string,_operadora:string):void{
        this.telefono_remitente = new Telefono(_numero,_operadora)
    }
    public  setTelefonoDestinatario(_numero:string,_operadora:string):void{
        this.telefono_destinatario = new Telefono(_numero,_operadora)
    }

    public  setPeso(_peso:number):void{
        this.peso = _peso;
    }

    public  setValor(_valor:number):void{
        this.valor = _valor;
    } 

    public  construirPaquete():Paquete{
        
        //direcciones
        this.remitente.direccion = this.direccion_remitente
        this.destinatario.direccion = this.direccion_destinatario
        //telefonos
        this.remitente.telefono = this.telefono_remitente
        this.destinatario.telefono = this.telefono_destinatario

        let paquete = new Paquete(this.valor,this.descripcion,this.peso,this.remitente,this.destinatario)

        //calculo de cotización
        let cotizacion:CotizacionEnvioAbstracta

        if(paquete.remitente.direccion.pais != paquete.destinatario.direccion.pais){//SI ES UN ENVÍO INTERNACIONAL PAGA GASTOS DE DESADUANIZACIÓN (IVA, ADVALOREM, FODINFA)
            let cotizacion_concreta = new CotizacionEnvioConcreta ();
            let cotizacion_iva = new CotizacionEnvioIva (cotizacion_concreta);
            let cotizacion_advalorem = new CotizacionEnvioAdValorem (cotizacion_iva);
            let cotizacion_fodinfa = new CotizacionEnvioFodinfa (cotizacion_advalorem);
            cotizacion = cotizacion_fodinfa
        }
        else{
            let cotizacion_concreta = new CotizacionEnvioConcreta ();
            cotizacion = cotizacion_concreta
        }
        
        paquete.costos_envio = cotizacion.calcularValorEnvio(paquete)

        return paquete;
    }





    
}