import { CotizacionEnvioDecorador } from './CotizacionEnvioDecorador';
import { Paquete } from '../../models/paquete';

export  class CotizacionEnvioAdValorem  extends CotizacionEnvioDecorador{
    
    public calcularValorEnvio(paquete: Paquete): any {
        let costos_envio:any = this.cotizacion_decorador.calcularValorEnvio(paquete);
        costos_envio.advalorem = paquete.valor * 0.1;//el 10% de impuestos
        return costos_envio
    }
}