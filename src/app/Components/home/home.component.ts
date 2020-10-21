import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from '../../Service/personas.service';
import { Personas } from '../../Models/personas';

import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cliente: any[] = []; 
  public jugador: any[] = [];
  public date; 
  public resolucion; 

  public equipoSerenity: number = 0;
  public estado: number = 0;
  public profesional: number = 0;
  public rolFantasy: number = 0;
  public chess: number = 0;

  // Doughnut
  public doughnutChartLabels: Label[] = ['Equipo Serenity', 'Estado Plus', 'Jugadores profesionales'];
  public doughnutChartData: MultiDataSet = [
    [this.equipoSerenity, this.estado, this.profesional],
    [50, 150, 120],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private service: PersonasService, private router: Router ) { }

  ngOnInit(): void {
    this.listaHeroes();
    this.listaPlayers();
    this.date = new Date();
    this.resolucion = screen.width;
  }

  listaHeroes()
  {
    this.service.getHeroes().subscribe(
      (response: any) =>
      {
        this.cliente = response;     
      }
    );
  }

  listaPlayers()
  {
    this.service.getPlayers().subscribe(
      (response: any) =>
      {
        this.jugador = response;   

        for(let i=0; i<=(this.jugador.length)-1; i++)
        {
          let x = this.jugador[i].team_name;
          if(x == "Team Serenity")
          {
            this.equipoSerenity += 1; 
          }

          let y = this.jugador[i].plus;
          if(y == true)
          {
            this.estado += 1; 
          }

          let z = this.jugador[i].is_pro;
          if(z == true)
          {
            this.profesional += 1; 
          }

          let w = this.jugador[i].fantasy_role;
          if(w > 3)
          {
            this.rolFantasy += 1; 
          }

          let k = this.jugador[i].cheese;
          if(k > 0)
          {
            this.chess += 1; 
          }
        }
      }
    );
  }

  // events Donna
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
    
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

}
