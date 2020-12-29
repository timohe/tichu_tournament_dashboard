import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentDashboardPageRoutingModule } from './tournament-dashboard-routing.module';

import { TournamentDashboardPage } from './tournament-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentDashboardPageRoutingModule
  ],
  declarations: [TournamentDashboardPage]
})
export class TournamentDashboardPageModule {}
