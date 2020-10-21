import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonasService } from '../../Service/personas.service';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {

  public jugador;
  public date; 
  public resolucion;

  public getPlayer = {}; 
  public idPlayer;
  public id;

  constructor(private service: PersonasService, private activeParams: ActivatedRoute,) { }

  ngOnInit(): void 
  {
    this.idPlayer = this.activeParams.snapshot.paramMap.get('id');
    if(this.idPlayer != undefined || this.idPlayer != null)
    {
      this.elJugador();
      this.date = new Date();
      this.resolucion = screen.width;
    }
  }

  elJugador()
  {
    this.service.getOnePlayer(this.idPlayer).subscribe(
      (response: any) =>
      {
        this.getPlayer = response.profile;   
      },
      (error) =>
      {
        let errorMessage = <any>error;
        if(errorMessage != null)
        {
          console.log(error);
        }
      }
    );
  }

}
