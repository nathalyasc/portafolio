import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

    info: Infopagina ={};
    cargada= false;
  
    equipo: any [] =[];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
 
   }
 
   private cargarInfo(){

    this.http.get('/assets/data/data-pagina.json')
    .subscribe( (resp: Infopagina) => {
     
      this.cargada = true;
      this.info = resp;
      // console.log(resp.facebook);
})
   }

   private cargarEquipo(){

    this.http.get('https://angular-html-7889e.firebaseio.com/equipo.json')
    .subscribe( (resp:any []) => {
     
      this.equipo = resp;
       console.log(resp);
})
   }
   

}
