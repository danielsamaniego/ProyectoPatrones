import { DetalleFactura } from './detalle-factura';
import { PaqueteFactura } from './paquete-factura';

export class Factura {
    constructor(numero,fecha,cliente,cedula,celular,direccion,paquete,detalles){
        this.numero = numero;
        this.fecha = fecha;
        this.cliente = cliente;
        this.cedula = cedula;
        this.celular = celular;
        this.direccion = direccion;
        this.paquete = paquete;
        this.detalles = detalles;
    }
    
    numero:string
    fecha:Date
    cliente:string
    cedula:number
    celular:number
    direccion:string
    paquete:PaqueteFactura
    detalles:DetalleFactura[]

   
}