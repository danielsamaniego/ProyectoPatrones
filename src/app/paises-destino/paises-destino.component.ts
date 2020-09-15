import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Paquete } from '../models/paquete';
import { GeneradorReportes } from '../reportes/commands/GeneradorReportes';
import { PaisDestinoComunCommand } from '../reportes/commands/PaisDestinoComunCommand';
import { PaquetefachadaService } from '../services/paquetefachada.service';

@Component({
  selector: 'app-paises-destino',
  templateUrl: './paises-destino.component.html',
  styleUrls: ['./paises-destino.component.css']
})
export class PaisesDestinoComponent implements OnInit {
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
    let comandoPaisDestino = new PaisDestinoComunCommand(this.envios);

    let generadorReportes = new GeneradorReportes();
    generadorReportes.establecerComando(comandoPaisDestino);
    let datos = generadorReportes.ejecutar();
    console.log(datos)
    var myChart = new Chart("canvas", {  
        type: 'bar',
        data: {
            labels: datos[0],
            datasets: [{
                label: 'Envíos Por País de Destino',
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