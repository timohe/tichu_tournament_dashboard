import { Component, OnInit } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { User, Tournament, TournamentBestlistResponse, TournamentUserStats, TournamentRankingEntry } from '../types';
import { environment, SERVER_URL } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ToastController, NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { ToastService } from '../helperServices/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';

// http://localhost:8100/tournament-dashboard?tournamentName=test

@Component({
	selector: 'app-tournament-dashboard',
	templateUrl: './tournament-dashboard.page.html',
	styleUrls: ['./tournament-dashboard.page.scss'],
})
export class TournamentDashboardPage implements OnInit {
	activeTournamentBestlist: TournamentBestlistResponse = null;
	activeTournamentRanking: Array<TournamentRankingEntry> = null;
	tournamentName: string;
	teamGameAndSymbol: string;
	showLeaderboard: boolean;
	currentTournament: Tournament;
	timeTillNextRound: string;

	constructor(private route: ActivatedRoute, public translator: TranslateService, private toastService: ToastService, private httpClient: HttpClient, public toastController: ToastController) { }
	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			if (params) {
				this.tournamentName = params.tournamentName;
				this.refreshActiveTournament(this.tournamentName);
				// refresh every 15 seconds
				const x = setInterval(() => {
					this.refreshActiveTournament(this.tournamentName);
				}, 5000);
			}
		});
	}
	refreshActiveTournament(name: string) {
		this.APIGetTournamentBestlistByName(name).subscribe((bestlist) => {
			this.activeTournamentBestlist = bestlist;
		});
		this.APIGetTournamentRanking(name).subscribe((ranking) => {
			this.activeTournamentRanking = ranking;
			if (ranking[0].player2Id) {
				this.teamGameAndSymbol = '&';
			}
		});
		this.APIgetTournamentByName(name).subscribe((tournament) => {
			this.currentTournament = tournament;
			this.refreshRemainingTime();
		});
	}

	refreshRemainingTime() {
		if (!this.currentTournament.lastRoundStartedAt) {
			return;
		}
		let roundStartDate = new Date(this.currentTournament.lastRoundStartedAt)
		// Update the count down every 1 second
		const now = new Date();
		var diffInMs = (roundStartDate.getTime() + this.currentTournament.timePerRound * 60000) - now.getTime();
		this.timeTillNextRound = this.humanReadableDuration(diffInMs);

	}

	humanReadableDuration(msDuration: number): string {
		if (msDuration < 0) {
			return `00:00:00`;
		} else {
			const h = Math.floor(msDuration / 1000 / 60 / 60);
			const m = Math.floor((msDuration / 1000 / 60 / 60 - h) * 60);
			const s = Math.floor(((msDuration / 1000 / 60 / 60 - h) * 60 - m) * 60);

			// To get time format 00:00:00
			const seconds: string = s < 10 ? `0${s}` : `${s}`;
			const minutes: string = m < 10 ? `0${m}` : `${m}`;
			const hours: string = h < 10 ? `0${h}` : `${h}`;
			return `${hours}:${minutes}:${seconds}`;
		}
	}


	toggleShowLeaderboard() {
		this.showLeaderboard = !this.showLeaderboard;
	}

	APIGetTournamentBestlistByName(tournamentName: string): Observable<TournamentBestlistResponse> {
		return this.httpClient.get<TournamentBestlistResponse>(`${SERVER_URL}/tournament/tournamentBestListbyName/${tournamentName}`).pipe(catchError((err) => {
			this.toastService.presentToast();
			return throwError(err);
		}));
	}

	APIGetTournamentRanking(tournamentName: string): Observable<Array<TournamentRankingEntry>> {
		return this.httpClient.get<Array<TournamentRankingEntry>>(`${SERVER_URL}/tournament/ranking/${tournamentName}`).pipe(catchError((err) => {
			this.toastService.presentToast();
			return throwError(err);
		}));
	}

	APIgetTournamentByName(tournamentName: string): Observable<Tournament> {
		return this.httpClient.get<Tournament>(`${SERVER_URL}/tournament/getTournamentByName/${tournamentName}`).pipe(catchError((err) => {
			this.toastService.presentToast();
			return throwError(err);
		}));
	}
}
