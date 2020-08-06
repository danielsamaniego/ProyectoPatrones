import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Paquete } from '../models/paquete'


@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private firebase: AngularFireDatabase) { }

  listaPaquetes: AngularFireList<any>;

  getPaquetes(){
    this.listaPaquetes = this.firebase.list('paquetes')
  }
  postPaquetes(paquete: Paquete){

    this.listaPaquetes.push({
      
    });
  }
}
