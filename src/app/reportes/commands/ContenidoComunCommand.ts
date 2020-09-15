import { Paquete } from '../../models/paquete';
import { ICommandReporte } from "./ICommandReporte";

export class ContenidoComunCommand implements ICommandReporte{
    
    private paquetes:Array<any>;
    
    constructor(paquetes:Array<any>){
        this.paquetes = paquetes;
    }
    ejecutar() {
        let chart = [];
        
        let contenido = [];
        let cantidad = [];
        let color = [];
        //'+(Math.floor(Math.random() * (255 - 0)) + 0)+'

        this.paquetes.forEach(elemento =>{
            let paquete = elemento as Paquete;
            if(!contenido.includes(paquete.descripcion)){
                contenido.push(paquete.descripcion);
                color.push('rgba('+(Math.floor(Math.random() * (255 - 0)) + 0)+', '+(Math.floor(Math.random() * (255 - 0)) + 0)+', '+(Math.floor(Math.random() * (255 - 0)) + 0)+', '+(Math.floor(Math.random() * (255 - 0)) + 0)+')');
            }
            if(!cantidad[contenido.indexOf(paquete.descripcion)]){
                cantidad[contenido.indexOf(paquete.descripcion)] = 1;
            }
            else{
                cantidad[contenido.indexOf(paquete.descripcion)] += 1;
            }
            
        })
        chart.push(contenido);
        chart.push(color);
        chart.push(cantidad);
        return chart;
    }


}