export type StatIntervall = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'overall';

export interface Elo {
	date: Date;
	ranking: number;
}

export interface UserToLogin {
	email: string;
	password: string;
}
export interface UserToRegister {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export interface Whitelist {
	id: string;
	name: string;
}

export interface User {
	elo: Array<Elo>;
	overall_stats: {
		nrGames: number;
		nrWins: number;
		winRate: number
	};
	whitelist: Array<Whitelist>;
	round_stats: {
		rounds: number;
		points: number;
		doubleWins: number;
		bombs: number;
		firstPlaces: number;
		tichuAnnounced: number;
		bigTichuAnnounced: number;
		tichuSuccess: number;
		bigTichuSuccess: number;
		pointsFromTichu: number;
		tichuPrevented: number;
		tichuAnnouncedWhen1st: number
	};
	id: string;
	name: string;
	email: string;
	password: string;
	date: string;
}

export interface Round {
	gameId?: string;
	finishOrder: Array<number>;
	points: Array<number>;
	bombs: Array<number>;
	tichuAnnounced: Array<number>;
	// tichusSuccess: Array<number>;
	bigTichuAnnounced: Array<number>;
	// bigTichusSuccess: Array<number>;
}

export interface Game {
	_id?: string;
	players: Array<User>;
	finished: boolean;
	isRated: boolean;
	winners: string;
	isLastRound: boolean;
	rounds: Array<Round>;
	tournamentId: string;
	tournamentTableNr: number;
	finalScore: FinalScore;
}

export interface FinalScore {
	team1: number;
	team2: number;
}

export interface GameResponse {
	gameId: string;
}

export interface ScorePredictionResponse {
	pointsFromPoints: Array<number>;
	pointsFromTichu: Array<number>;
	oldScore: Array<number>;
	newScore: Array<number>;
}

export interface SingleGameOverviewResponse {
	// date needs to any so it can be overwritten by formatted string
	date: any;
	playerNames: Array<string>;
	isWon: boolean;
}

export interface RawUserStats {
	userId: string;
	overall_stats: {
		nrGames: number;
		nrWins: number;
		winRate: number
	};
	round_stats: {
		rounds: number;
		points: number;
		doubleWins: number;
		bombs: number;
		firstPlaces: number;
		tichuAnnounced: number;
		bigTichuAnnounced: number;
		tichuSuccess: number;
		bigTichuSuccess: number;
		pointsFromTichu: number;
		tichuPrevented: number;
		opponentTichuNr: number;
		tichuAnnouncedWhen1st: number
	};
}

export interface UserStats {
	name: string;
	elo: number;
	nrGames: number;
	nrWins: number;
	winRate: string;
	nrRounds: number;
	bombs: number;
	bombRate: string;
	firstPlaces: number;
	firstPlaceRate: string;
	doubleWins: number;
	doubleWinRate: string;
	tichuPrevented: number;
	tichuPreventedRate: string;
	tichuAnnouncedWhen1st: number;
	tichuAnnouncedWhen1stRate: string;
	tichuSuccess: number;
	tichuSuccessRate: string;
	bigTichuSuccess: number;
	bigTichuSuccessRate: string;
	tichuMaster: string;
}


export interface RegistrationData {
	email: string;
	username: string;
	password: string;
	password2: string;
}

export interface UserRanking {
	elo: number;
	totalUsers: number;
	nrGames: number;
	nrWins: number;
	winRate: number;
	nrRounds: number;
	bombs: number;
	bombRate: number;
	firstPlaces: number;
	firstPlaceRate: number;
	doubleWins: number;
	doubleWinRate: number;
	tichuPrevented: number;
	tichuPreventedRate: number;
	tichuAnnouncedWhen1st: number;
	tichuAnnouncedWhen1stRate: number;
	tichuSuccess: number;
	tichuSuccessRate: number;
	bigTichuSuccess: number;
	bigTichuSuccessRate: number;
	tichuMaster: number;
	// ADDED THIS TO AVOID TYPE ERROR
	remainingRounds?: number;
}

export interface TournamentMember {
	id: string;
	name: string;
}

export interface Tournament {
	_id: string;
	owner: string;
	name: string;
	type: 'swiss' | 'random';
	members: TournamentMember[];
	teams: any[][];
	isTeamTournament: boolean;
	finalRanking: Array<Array<any>>;
	isFinished: boolean;
	timePerRound: number;
	isLastRound: boolean;
	created: Date;
}

export interface TournamentUserStats {
	id: string;
	name: string;
	elo: number;
	nrGames: number;
	nrWins: number;
	winRate: number;
	nrRounds: number;
	bombs: number;
	bombRate: number;
	firstPlaces: number;
	firstPlaceRate: number;
	doubleWins: number;
	doubleWinRate: number;
	tichuPrevented: number;
	tichuPreventedRate: number;
	tichuAnnouncedWhen1st: number;
	tichuAnnouncedWhen1stRate: number;
	tichuSuccess: number;
	tichuSuccessRate: number;
	bigTichuSuccess: number;
	bigTichuSuccessRate: number;
	tichuMaster: number;
}

export interface TournamentBestlistResponse {
	elo: Array<UserStats>;
	nrGames: Array<UserStats>;
	nrWins: Array<UserStats>;
	winRate: Array<UserStats>;
	nrRounds: Array<UserStats>;
	bombs: Array<UserStats>;
	bombRate: Array<UserStats>;
	firstPlaces: Array<UserStats>;
	firstPlaceRate: Array<UserStats>;
	doubleWins: Array<UserStats>;
	doubleWinRate: Array<UserStats>;
	tichuPrevented: Array<UserStats>;
	tichuPreventedRate: Array<UserStats>;
	tichuAnnouncedWhen1st: Array<UserStats>;
	tichuAnnouncedWhen1stRate: Array<UserStats>;
	tichuSuccess: Array<UserStats>;
	tichuSuccessRate: Array<UserStats>;
	bigTichuSuccess: Array<UserStats>;
	bigTichuSuccessRate: Array<UserStats>;
	tichuMaster: Array<UserStats>;
}

export interface StatusMessage {
	active: boolean;
	title: string;
	message: string;
	excludedBuilds: Array<string>;
}

export interface ProfilePictureResponse {
	img: string;
	_id: string;
	userId: string;
}

export interface Achievement {
	isTournamentAchievement: boolean;
	isCustomAchievement: boolean;
	isLevelAchievement: boolean;
	icon: string;
	tournamentInfo: {
		name: string;
		year: number;
		rank: number;
	};
	customInfo: {
		title: string;
		description: string;
	};
	levelInfo: {
		translationKey: string;
		level: number;
		progress: number;
		target: number;
	};
}
