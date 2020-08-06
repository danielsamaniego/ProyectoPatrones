import { Paquete } from '../../models/paquete';

export abstract class CotizacionEnvioAbstracta{

    public abstract calcularValorEnvio(paquete:Paquete):any;

}