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

	constructor(private route: ActivatedRoute, public translator: TranslateService, private toastService: ToastService, private httpClient: HttpClient, public toastController: ToastController) { }
	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			if (params) {
				this.tournamentName = params.tournamentName;
				this.refreshActiveTournament(this.tournamentName);
				// refresh every 15 seconds
				const x = setInterval(() => {
					this.refreshActiveTournament(this.tournamentName);
				}, 30000);
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
}
