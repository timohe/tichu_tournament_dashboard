import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentDashboardPage } from './tournament-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentDashboardPageRoutingModule {}
