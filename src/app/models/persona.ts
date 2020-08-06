import {Direccion} from './direccion';
import {Telefono} from './telefono'

export class Persona {
    constructor(_cedula:string,_nombre:string,_correo:string){
        this.cedula = _cedula
        this.nombre = _nombre
        this.correo = _correo
    }

    cedula:string;
    nombre:string;
    correo:string;

    telefono: Telefono;
    direccion: Direccion;
}