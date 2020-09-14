import { DetalleFactura } from './detalle-factura';
import { PaqueteFactura } from './paquete-factura';

export class Factura {
    constructor(numero,fecha,cliente,celular,direccion,paquete,detalles){
        this.numero = numero;
        this.fecha = fecha;
        this.cliente = cliente;
        this.celular = celular;
        this.direccion = direccion;
        this.paquete = paquete;
        this.detalles = detalles;
    }
    
    numero:string
    fecha:Date
    cliente:string
    celular:number
    direccion:string
    paquete:PaqueteFactura
    detalles:DetalleFactura[]

   
}