import { CotizacionEnvioDecorador } from './CotizacionEnvioDecorador';
import { Paquete } from '../../models/paquete';

export  class CotizacionEnvioIva  extends CotizacionEnvioDecorador{
    
    public calcularValorEnvio(paquete: Paquete): any {
        let costos_envio:any = this.cotizacion_decorador.calcularValorEnvio(paquete)
        costos_envio.iva = paquete.valor * 0.12;//el 12% iva
        return costos_envio
    }
}