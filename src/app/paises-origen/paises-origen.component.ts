import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Paquete } from '../models/paquete';
import { GeneradorReportes } from '../reportes/commands/GeneradorReportes';
import { PaisOrigenComunCommand } from '../reportes/commands/PaisOrigenComunCommand';
import { PaquetefachadaService } from '../services/paquetefachada.service';

@Component({
  selector: 'app-paises-origen',
  templateUrl: './paises-origen.component.html',
  styleUrls: ['./paises-origen.component.css']
})
export class PaisesOrigenComponent implements OnInit {

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
    let comandoPaisOrigen = new PaisOrigenComunCommand(this.envios);

    let generadorReportes = new GeneradorReportes();
    generadorReportes.establecerComando(comandoPaisOrigen);
    let datos = generadorReportes.ejecutar();
    console.log(datos)
    var myChart = new Chart("canvas", {  
        type: 'bar',
        data: {
            labels: datos[0],
            datasets: [{
                label: 'Envíos Por País de Origen',
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
