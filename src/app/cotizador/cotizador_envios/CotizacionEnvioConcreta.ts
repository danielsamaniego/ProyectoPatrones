import { Paquete } from '../../models/paquete';
import { CotizacionEnvioAbstracta } from './CotizacionEnvioAbstracta';

export class CotizacionEnvioConcreta extends CotizacionEnvioAbstracta{
    
    public  calcularValorEnvio(paquete:Paquete):any{
        var costos_envio:any = {};
        if(paquete.peso<1){//valor minimo de envío de cosas que pesan menos de una libra
            costos_envio.envio = 4;//4 dólares
        }
        else{
            costos_envio.envio = 4 * paquete.peso ;
        }
        return costos_envio;
    }
}