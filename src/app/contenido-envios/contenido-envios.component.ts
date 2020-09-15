import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Paquete } from '../models/paquete';
import { ContenidoComunCommand } from '../reportes/commands/ContenidoComunCommand';
import { GeneradorReportes } from '../reportes/commands/GeneradorReportes';
import { PaquetefachadaService } from '../services/paquetefachada.service';

@Component({
  selector: 'app-contenido-envios',
  templateUrl: './contenido-envios.component.html',
  styleUrls: ['./contenido-envios.component.css']
})
export class ContenidoEnviosComponent implements OnInit {

  private envios:Array<any>;

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
    let comandoPaisOrigen = new ContenidoComunCommand(this.envios);

    let generadorReportes = new GeneradorReportes();
    generadorReportes.establecerComando(comandoPaisOrigen);
    let datos = generadorReportes.ejecutar();
    console.log(datos)
    var myChart = new Chart("canvas", {  
        type: 'bar',
        data: {
            labels: datos[0],
            datasets: [{
                label: 'Contenido de Envíos',
                data: datos[2],
                backgroundColor: datos[1],
                borderColor: datos[1],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

}