import { CotizacionEnvioAbstracta } from './CotizacionEnvioAbstracta';
import { CotizacionEnvioConcreta } from './CotizacionEnvioConcreta';

export abstract class CotizacionEnvioDecorador extends CotizacionEnvioAbstracta{
    
    protected cotizacion_decorador:CotizacionEnvioAbstracta
    
    constructor(cotizador_concreto:CotizacionEnvioConcreta){
        super();
        this.cotizacion_decorador = cotizador_concreto;
    }  
    


}