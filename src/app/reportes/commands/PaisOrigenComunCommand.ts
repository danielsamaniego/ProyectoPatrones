import { Paquete } from '../../models/paquete';
import { ICommandReporte } from "./ICommandReporte";

export class PaisOrigenComunCommand implements ICommandReporte{
    
    
    private paquetes:Array<any>;
    
    constructor(paquetes:Array<any>){
        this.paquetes = paquetes;
    }
    ejecutar() {
        let chart = [];
        
        let paises = [];
        let cantidad = [];
        let color = [];
        //'+(Math.floor(Math.random() * (255 - 0)) + 0)+'

        this.paquetes.forEach(elemento =>{
            let paquete = elemento as Paquete;
            if(!paises.includes(paquete.remitente.direccion.pais)){
                paises.push(paquete.remitente.direccion.pais);
                color.push('rgba('+(Math.floor(Math.random() * (255 - 0)) + 0)+', '+(Math.floor(Math.random() * (255 - 0)) + 0)+', '+(Math.floor(Math.random() * (255 - 0)) + 0)+', '+(Math.floor(Math.random() * (255 - 0)) + 0)+')');
            }
            if(!cantidad[paises.indexOf(paquete.remitente.direccion.pais)]){
                cantidad[paises.indexOf(paquete.remitente.direccion.pais)] = 1;
            }
            else{
                cantidad[paises.indexOf(paquete.remitente.direccion.pais)] += 1;
            }
            
        })
        chart.push(paises);
        chart.push(color);
        chart.push(cantidad);
        return chart;
    }

}