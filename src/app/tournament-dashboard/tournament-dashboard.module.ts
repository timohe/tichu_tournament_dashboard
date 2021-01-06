import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { TournamentDashboardPageRoutingModule } from './tournament-dashboard-routing.module';
import { TournamentDashboardTileComponent } from './tournament-dashboard-tile/tournament-dashboard-tile.component';

import { TournamentDashboardPage } from './tournament-dashboard.page';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	TournamentDashboardPageRoutingModule,
	TranslateModule.forChild(),
  ],
  declarations: [TournamentDashboardPage, TournamentDashboardTileComponent]
})
export class TournamentDashboardPageModule {}
