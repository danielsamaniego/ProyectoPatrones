import {Persona} from './persona'

export class Paquete {

    constructor(valor,numero_rastreo,descripcion,peso,remitente,destinatario){
        this.numero_rastreo = numero_rastreo;
        this.descripcion = descripcion;
        this.remitente = remitente;
        this.destinatario = destinatario;
        this.peso = peso;
        this.valor  = valor
    }
    numero_rastreo:string
    descripcion:string
    remitente:Persona
    destinatario:Persona
    peso:number
    valor:number
    costos_envio:any//EL COSTO SE CALCULA AL CONSTRUIR EL PAQUETE
    
}