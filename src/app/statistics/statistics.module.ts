import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { TotalConfirmedComponent } from './total-confirmed/total-confirmed.component';

import { MapComponent } from './map/map.component';
import { LastUpdateComponent } from './last-update/last-update.component';
import { TotalDeathComponent } from './total-death/total-death.component';
import { TotalRecoverdComponent } from './total-recoverd/total-recoverd.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [TotalConfirmedComponent, MapComponent, LastUpdateComponent, TotalDeathComponent, TotalRecoverdComponent, HomeComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule
    
  ]
})
export class StatisticsModule { }
