import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, skip} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Personas } from '../Models/personas';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //URL = "https://api.opendota.com/api/heroes";

  constructor( private http: HttpClient ) { }

  getHeroes()
  {
    return this.http.get('https://api.opendota.com/api/heroes').pipe(map((res)=>res));
  }

  getPlayers()
  {
    return this.http.get('https://api.opendota.com/api/proPlayers').pipe(map((res)=>res));
  }

  getOnePlayer(id)
  {
    return this.http.get('https://api.opendota.com/api/players/' + id).pipe(map((res)=>res));
  }
  
}
