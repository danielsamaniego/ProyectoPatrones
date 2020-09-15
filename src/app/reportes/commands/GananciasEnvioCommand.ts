import { Paquete } from '../../models/paquete';
import { ICommandReporte } from "./ICommandReporte";

export class GananciasEnvioCommand implements ICommandReporte{

    private paquetes:Array<any>;
    
    constructor(paquetes:Array<any>){
        this.paquetes = paquetes;
    }
    ejecutar() {
        
        let total = 0;
        //'+(Math.floor(Math.random() * (255 - 0)) + 0)+'

        this.paquetes.forEach(elemento =>{
            let paquete = elemento as Paquete;
            total+= paquete.costos_envio.envio;
        });
        
        return total;
    }


}