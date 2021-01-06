import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TournamentDashboardTileComponent } from './tournament-dashboard-tile.component';

describe('TournamentTileComponent', () => {
	let component: TournamentDashboardTileComponent;
	let fixture: ComponentFixture<TournamentDashboardTileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TournamentDashboardTileComponent],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(TournamentDashboardTileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
