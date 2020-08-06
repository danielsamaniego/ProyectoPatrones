import { CotizacionEnvioDecorador } from './CotizacionEnvioDecorador';
import { Paquete } from '../../models/paquete';

export  class CotizacionEnvioFodinfa  extends CotizacionEnvioDecorador{
    
    public calcularValorEnvio(paquete: Paquete): any {
        let costos_envio:any = this.cotizacion_decorador.calcularValorEnvio(paquete)
        costos_envio.fodinfa = 0.5;//50 centavos al fondo de desarrollo infantil
        return costos_envio
    }
}