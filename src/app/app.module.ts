import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Custom added
import { AuthModule } from './helperServices/auth/auth.module';
import { HttpInterceptorService } from './helperServices/auth/http-interceptor.service';
import { Network } from '@ionic-native/network/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { HammerModule } from '@angular/platform-browser';
import 'hammerjs';


export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  	declarations: [AppComponent],
  	entryComponents: [],
	imports: [BrowserModule, IonicModule.forRoot(), NgxSliderModule, AppRoutingModule, AuthModule, TranslateModule.forRoot(), HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
		HammerModule
	],
  	providers: [
		Network,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
		{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
	],
  	bootstrap: [AppComponent]
})
export class AppModule {}
