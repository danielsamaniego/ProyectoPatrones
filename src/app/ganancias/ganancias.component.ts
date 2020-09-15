import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Paquete } from '../models/paquete';
import { GananciasEnvioCommand } from '../reportes/commands/GananciasEnvioCommand';
import { GeneradorReportes } from '../reportes/commands/GeneradorReportes';
import { PaisDestinoComunCommand } from '../reportes/commands/PaisDestinoComunCommand';
import { PaquetefachadaService } from '../services/paquetefachada.service';


@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css']
})
export class GananciasComponent implements OnInit {
  private envios:Array<any>;

  public ganancias  = 0;
  constructor(private paqueteFachadaService:PaquetefachadaService) { 
    this.paqueteFachadaService.obtenerPaquetes().snapshotChanges().subscribe(item => {
      this.envios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;

        this.envios.push(x as Paquete);
        this.calcularReportes();

      });
    });
  }

  ngOnInit(): void {


      
  }

  calcularReportes():void{
    let comandoGananciasEnvio = new GananciasEnvioCommand(this.envios);

    let generadorReportes = new GeneradorReportes();
    generadorReportes.establecerComando(comandoGananciasEnvio);
    
    this.ganancias = generadorReportes.ejecutar();
    

  }

}