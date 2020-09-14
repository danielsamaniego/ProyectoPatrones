import {Persona} from './persona'

export class Paquete {

    constructor(valor,descripcion,peso,remitente,destinatario){
        this.descripcion = descripcion;
        this.remitente = remitente;
        this.destinatario = destinatario;
        this.peso = peso;
        this.valor  = valor
    }
    $key:string
    fecha:Date
    descripcion:string
    remitente:Persona
    destinatario:Persona
    peso:number
    valor:number
    costos_envio:any//EL COSTO SE CALCULA AL CONSTRUIR EL PAQUETE
    
}