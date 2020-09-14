import { Direccion } from './direccion'
import { Persona } from './persona'
import { Telefono } from './telefono'
import { Paquete } from './paquete'
import { CotizacionEnvioConcreta } from '../cotizador/cotizador_envios/CotizacionEnvioConcreta';
import { CotizacionEnvioIva } from '../cotizador/cotizador_envios/CotizadorIva';
import { CotizacionEnvioAdValorem } from '../cotizador/cotizador_envios/CotizacionAdValorem';
import { CotizacionEnvioFodinfa } from '../cotizador/cotizador_envios/CotizacionEnvioFodinfa';
import { CotizacionEnvioAbstracta } from '../cotizador/cotizador_envios/CotizacionEnvioAbstracta';
import { PaqueteFactura } from './paquete-factura';
import { DetalleFactura } from './detalle-factura';
import { __values } from 'tslib';
import { Factura } from './factura';

export class FacturaBuilder{


    private numero:string;
    private fecha:Date;
    private cliente:string;
    private cedula:string;
    private celular:string;
    private direccion:string;

    private descripcion:string;
    private valor:number;

    private paqueteFactura:PaqueteFactura;
    private detallesFactura:DetalleFactura[] = [];


    
    public  setNumero(_numero:string):void{//numero de factura
        this.numero = _numero;
    }

    public  setFecha(_fecha:Date):void{//fecha de emisión
        this.fecha = _fecha;
    }

    public  setCliente(_cliente:string):void{//nombre del cliente
        this.cliente = _cliente;
    }
    public  setCedula(_cedula:string):void{//cedula del cliente
        this.cedula = _cedula;
    }
    public  setCelular(_celular:string):void{//celular del cliente
        this.celular = _celular;
    }
    public  setDireccion(_direccion:string):void{//direccion de emision
        this.direccion = _direccion;
    }

    public  setDescripcion(_descripcion:string):void{//descripcion del paquete
        this.descripcion = _descripcion;
    }

    public  setValor(_valor:number):void{//valor del paquete
        this.valor = _valor;
    }

    public  agregarDetalle(_detalle:string,_valor:number):void{//agrega un detalle al cuerpo de la fatura
        this.detallesFactura.push(new DetalleFactura(_detalle,_valor));
    }


    public  construirPaquete():Factura{
        this.paqueteFactura = new PaqueteFactura(this.descripcion,this.valor);
        let factura:Factura = new Factura(this.numero,this.fecha,this.cliente,this.celular,this.direccion,this.paqueteFactura,this.detallesFactura);
        return factura;
    }





    
}