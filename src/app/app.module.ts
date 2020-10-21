import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { PersonasService } from './Service/personas.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PlayerDataComponent } from './Components/player-data/player-data.component';

const appRoutes: Routes = 
[
  { path: '', component: HomeComponent }, 
  { path: 'data/:id', component: PlayerDataComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerDataComponent,
  ],
  imports: [
    RouterModule.forRoot( appRoutes ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [
    PersonasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
