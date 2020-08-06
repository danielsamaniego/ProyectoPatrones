import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { PaqueteBuilder } from '../models/PaqueteBuilder';
import { Paquete } from '../models/paquete';
import { AngularFireList } from 'angularfire2/database';
import { PaquetefachadaService } from '../services/paquetefachada.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  public envios:Array<any>;
  
  constructor(private paqueteFachadaService:PaquetefachadaService) {

    this.paqueteFachadaService.obtenerPaquetes().snapshotChanges().subscribe(item => {
      this.envios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.envios.push(x as Paquete);
      });
    });
   }

  ngOnInit() {
    
  }

}
