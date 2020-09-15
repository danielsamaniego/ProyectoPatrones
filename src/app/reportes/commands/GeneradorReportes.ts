import { ICommandReporte } from './ICommandReporte';

export class GeneradorReportes{
    
    private comando:ICommandReporte;

    establecerComando(comando:ICommandReporte){
        this.comando = comando;
    }
    
    ejecutar() {
        return this.comando.ejecutar();
    }

}