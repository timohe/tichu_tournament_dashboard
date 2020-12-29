import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'app-tournament-dashboard',
	templateUrl: './tournament-dashboard.page.html',
	styleUrls: ['./tournament-dashboard.page.scss'],
})
export class TournamentDashboardPage implements OnInit {

	tournamentName: string;
	constructor(private route: ActivatedRoute) { }
	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			if (params) {
				this.tournamentName = params.tournamentName;
				// const queryParams: Params = JSON.parse(params);
				// console.log(params);
			}
		});
	}
}
