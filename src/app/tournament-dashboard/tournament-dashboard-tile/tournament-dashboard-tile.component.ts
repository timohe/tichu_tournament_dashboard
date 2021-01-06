import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { User, Tournament, TournamentBestlistResponse, TournamentUserStats } from '../../types';


@Component({
	selector: 'app-tournament-dashboard-tile',
	templateUrl: './tournament-dashboard-tile.component.html',
	styleUrls: ['./tournament-dashboard-tile.component.scss'],
})
export class TournamentDashboardTileComponent implements OnChanges {
	@Input() propertyName: string;
	@Input() statName: string;
	@Input() showPercentage: string;
	@Input() bestList: TournamentBestlistResponse;

	statsToShow: Array<TournamentUserStats> = [];
	rankings: Array<number>;
	showExplanation = false;

	constructor() { }

	ngOnChanges() {
		this.refreshStatsToShow();
	}

	refreshStatsToShow() {
		if (!this.bestList) {
			return;
		}
		this.statsToShow = [];
		this.rankings = [];
		const dataForThisStat: Array<TournamentUserStats> = this.bestList[this.propertyName];
		for (let i = 0; i < dataForThisStat.length; i++) {
			if (i < 3) {
				this.statsToShow.push(dataForThisStat[i]);
				this.rankings.push(i + 1);
			}
		}
		this.allowSameRanks();
	}

	allowSameRanks() {
		const listOfValues = [];
		for (const stat of this.statsToShow) {
			listOfValues.push(stat[this.propertyName]);
		}
		let lastValue = null;
		for (let index = 0; index < listOfValues.length; index++) {
			if (lastValue === listOfValues[index]) {
				this.rankings[index] = this.rankings[index - 1];
			}
			lastValue = listOfValues[index];
		}
	}
}
