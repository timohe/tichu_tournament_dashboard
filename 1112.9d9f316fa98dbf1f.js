"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1112],{1112:(k,g,r)=>{r.r(g),r.d(g,{TournamentDashboardPageModule:()=>q});var c=r(9808),h=r(3075),i=r(5056),l=r(5797),m=r(8386),d=r(1737),p=r(2340),u=r(7221),t=r(6435),f=r(7919),T=r(520);function b(e,a){if(1&e&&(t.TgZ(0,"p",10),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).index,o=t.oxw(2);t.xp6(1),t.hij("",o.rankings[n],".")}}function Z(e,a){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.Oqu(null==n?null:n.name)}}function _(e,a){if(1&e&&(t.TgZ(0,"div",7),t.TgZ(1,"div",8),t.YNc(2,b,2,1,"p",9),t.YNc(3,Z,2,1,"p",3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw().$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngIf",o.rankings),t.xp6(1),t.Q6J("ngIf",o.rankings),t.xp6(2),t.AsE("",n[o.propertyName],"",o.showPercentage,"")}}function x(e,a){if(1&e&&(t.TgZ(0,"ion-item",5),t.YNc(1,_,6,4,"div",6),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.rankings)}}function v(e,a){if(1&e&&(t.TgZ(0,"ion-list"),t.YNc(1,x,2,1,"ion-item",4),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.statsToShow)}}let P=(()=>{class e{constructor(){this.statsToShow=[],this.showExplanation=!1}ngOnChanges(){this.refreshStatsToShow()}refreshStatsToShow(){if(!this.bestList)return;this.statsToShow=[],this.rankings=[];const n=this.bestList[this.propertyName];for(let o=0;o<n.length;o++)o<3&&(this.statsToShow.push(n[o]),this.rankings.push(o+1));this.allowSameRanks()}allowSameRanks(){const n=[];for(const s of this.statsToShow)n.push(s[this.propertyName]);let o=null;for(let s=0;s<n.length;s++)o===n[s]&&(this.rankings[s]=this.rankings[s-1]),o=n[s]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tournament-dashboard-tile"]],inputs:{propertyName:"propertyName",statName:"statName",showPercentage:"showPercentage",bestList:"bestList"},features:[t.TTD],decls:8,vars:3,consts:[[1,"top"],["alt","",3,"src"],[1,"wrapper"],[4,"ngIf"],["lines","none","detail","false",4,"ngFor","ngForOf"],["lines","none","detail","false"],["class","comparison",4,"ngIf"],[1,"comparison"],[1,"number-and-name"],["class","rating-number",4,"ngIf"],[1,"rating-number"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-card"),t.TgZ(1,"ion-card-header",0),t._UZ(2,"img",1),t.TgZ(3,"div",2),t.TgZ(4,"ion-card-title"),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-card-content"),t.YNc(7,v,2,1,"ion-list",3),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.s9C("src","../../assets/icon/stats/"+o.propertyName+".svg",t.LSH),t.xp6(3),t.Oqu(o.statName),t.xp6(2),t.Q6J("ngIf",o.statsToShow.length>0))},directives:[i.PM,i.Zi,i.Dq,i.FN,c.O5,i.q_,c.sg,i.Ie],styles:["ion-card[_ngcontent-%COMP%]{max-width:300px}h3[_ngcontent-%COMP%]{color:#fff}.rating-number[_ngcontent-%COMP%]{width:1.2em;padding-right:0}.comparison[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%}p[_ngcontent-%COMP%]{font-size:1.4em}.number-and-name[_ngcontent-%COMP%]{display:flex;flex-direction:row}.top[_ngcontent-%COMP%]{position:relative;height:11rem;overflow:hidden;background-size:cover;background-position:center center;text-align:center;z-index:1;color:#fff;background-color:#2d2552}ion-item[_ngcontent-%COMP%]{max-height:2.5rem!important;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--padding-start: 0px !important;--padding-end: 0px !important;--min-height: 1.8rem !important}ion-card-subtitle[_ngcontent-%COMP%]{margin-top:.2rem;margin-bottom:.2rem;color:#000;font-size:.7rem!important}ion-card-title[_ngcontent-%COMP%]{color:#fff;font-size:2rem!important;font-weight:500}.no-margins[_ngcontent-%COMP%]{margin:0;padding:0}ion-note[_ngcontent-%COMP%]{top:.2rem;position:relative;padding:0!important;margin:0!important;font-size:1.5rem!important;color:var(--ion-color-primary)}ion-label[_ngcontent-%COMP%]{font-size:1.5rem!important;padding:0!important;margin:0!important}img[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.7rem;width:32%;display:block;margin-left:auto;margin-right:auto}"]}),e})();function w(e,a){1&e&&t._UZ(0,"ion-icon",5)}function A(e,a){1&e&&t._UZ(0,"ion-icon",6)}function C(e,a){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"ion-grid"),t.TgZ(4,"ion-row"),t.TgZ(5,"ion-col",7),t._UZ(6,"app-tournament-dashboard-tile",8),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"ion-col",7),t._UZ(9,"app-tournament-dashboard-tile",9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"ion-col",7),t._UZ(12,"app-tournament-dashboard-tile",10),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"ion-col",7),t._UZ(15,"app-tournament-dashboard-tile",11),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"ion-col",7),t._UZ(18,"app-tournament-dashboard-tile",12),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"ion-col",7),t._UZ(21,"app-tournament-dashboard-tile",13),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"ion-col",7),t._UZ(24,"app-tournament-dashboard-tile",14),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"ion-col",7),t._UZ(27,"app-tournament-dashboard-tile",15),t.ALo(28,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.tournamentName),t.xp6(4),t.s9C("statName",t.lcZ(7,17,"statistics.tichuMaster")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(10,19,"statistics.tichuAnnouncedWhen1stRate")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(13,21,"statistics.winRate")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(16,23,"statistics.bombRate")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(19,25,"statistics.doubleWinRate")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(22,27,"statistics.tichuPreventedRate")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(25,29,"statistics.tichuSuccessRate")),t.Q6J("bestList",n.activeTournamentBestlist),t.xp6(3),t.s9C("statName",t.lcZ(28,31,"statistics.bigTichuSuccessRate")),t.Q6J("bestList",n.activeTournamentBestlist)}}function N(e,a){if(1&e&&(t.TgZ(0,"ion-item",25),t.TgZ(1,"ion-label"),t._uU(2),t.qZA(),t.TgZ(3,"ion-label",19),t._uU(4),t.qZA(),t.TgZ(5,"ion-label",20),t._uU(6),t.qZA(),t.TgZ(7,"ion-label",21),t._uU(8),t.qZA(),t.qZA()),2&e){const n=a.$implicit,o=a.index,s=t.oxw(3);t.xp6(2),t.hij(" ",o+1,". "),t.xp6(2),t.lnq(" ",n.player1Name," ",s.teamGameAndSymbol," ",n.player2Name," "),t.xp6(2),t.hij(" ",n.winpointsPerRound," "),t.xp6(2),t.hij(" ",n.pointDifference," ")}}function y(e,a){if(1&e&&(t.TgZ(0,"div",23),t.YNc(1,N,9,6,"ion-item",24),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.activeTournamentRanking)}}function O(e,a){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h1"),t._uU(2,"Leaderboard"),t.qZA(),t.TgZ(3,"div",16),t.TgZ(4,"ion-item",17),t.TgZ(5,"ion-label",18),t._uU(6," Rank "),t.qZA(),t.TgZ(7,"ion-label",19),t._uU(8," Players "),t.qZA(),t.TgZ(9,"ion-label",20),t._uU(10," Winpoints/Round "),t.qZA(),t.TgZ(11,"ion-label",21),t._uU(12," Point-Difference "),t.qZA(),t.qZA(),t.YNc(13,y,2,1,"div",22),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(13),t.Q6J("ngIf",n.activeTournamentRanking)}}const M=[{path:"",component:(()=>{class e{constructor(n,o,s,D,R){this.route=n,this.translator=o,this.toastService=s,this.httpClient=D,this.toastController=R,this.activeTournamentBestlist=null,this.activeTournamentRanking=null}ngOnInit(){this.route.queryParams.subscribe(n=>{n&&(this.tournamentName=n.tournamentName,this.refreshActiveTournament(this.tournamentName),setInterval(()=>{this.refreshActiveTournament(this.tournamentName)},3e4))})}refreshActiveTournament(n){this.APIGetTournamentBestlistByName(n).subscribe(o=>{this.activeTournamentBestlist=o}),this.APIGetTournamentRanking(n).subscribe(o=>{this.activeTournamentRanking=o,o[0].player2Id&&(this.teamGameAndSymbol="&")})}toggleShowLeaderboard(){this.showLeaderboard=!this.showLeaderboard}APIGetTournamentBestlistByName(n){return this.httpClient.get(`${p.LB}/tournament/tournamentBestListbyName/${n}`).pipe((0,u.K)(o=>(this.toastService.presentToast(),(0,d._)(o))))}APIGetTournamentRanking(n){return this.httpClient.get(`${p.LB}/tournament/ranking/${n}`).pipe((0,u.K)(o=>(this.toastService.presentToast(),(0,d._)(o))))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.gz),t.Y36(l.sK),t.Y36(f.k),t.Y36(T.eN),t.Y36(i.yF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tournament-dashboard"]],decls:7,vars:4,consts:[[1,"top-spacer"],["color","primary",1,"leaderboard-toggle",3,"click"],["class","toggle-icon","name","trophy",4,"ngIf"],["class","toggle-icon","name","podium",4,"ngIf"],[4,"ngIf"],["name","trophy",1,"toggle-icon"],["name","podium",1,"toggle-icon"],["sizeLg","3","sizeMd","4","sizeXs","6"],["propertyName","tichuMaster","showPercentage","",3,"statName","bestList"],["propertyName","tichuAnnouncedWhen1stRate","showPercentage","%",3,"bestList","statName"],["showPercentage","%","propertyName","winRate",3,"bestList","statName"],["showPercentage","%","propertyName","bombRate",3,"bestList","statName"],["showPercentage","%","propertyName","doubleWinRate",3,"bestList","statName"],["showPercentage","%","propertyName","tichuPreventedRate",3,"bestList","statName"],["showPercentage","%","propertyName","tichuSuccessRate",3,"bestList","statName"],["howPercentage","%","propertyName","bigTichuSuccessRate",3,"bestList","statName"],[1,"leaderboard-container"],["lines","none","detail","false",1,"leaderboard","header"],[1,"rank"],[1,"users"],[1,"winpoints"],[1,"difference"],["class","leaderboard list",4,"ngIf"],[1,"leaderboard","list"],["lines","none","detail","false",4,"ngFor","ngForOf"],["lines","none","detail","false"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-content"),t._UZ(1,"div",0),t.TgZ(2,"ion-button",1),t.NdJ("click",function(){return o.toggleShowLeaderboard()}),t.YNc(3,w,1,0,"ion-icon",2),t.YNc(4,A,1,0,"ion-icon",3),t.qZA(),t.YNc(5,C,29,33,"div",4),t.YNc(6,O,14,1,"div",4),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",!o.showLeaderboard),t.xp6(1),t.Q6J("ngIf",o.showLeaderboard),t.xp6(1),t.Q6J("ngIf",!o.showLeaderboard),t.xp6(1),t.Q6J("ngIf",o.showLeaderboard))},directives:[i.W2,i.YG,c.O5,i.gu,i.jY,i.Nd,i.wI,P,i.Ie,i.Q$,c.sg],pipes:[l.X$],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color: var(--ion-color-background)}h1[_ngcontent-%COMP%]{color:var(--ion-color-primary);text-align:center;vertical-align:center!important;margin:0;font-size:4em}.leaderboard-toggle[_ngcontent-%COMP%]{position:absolute;right:15%;width:5em;height:5em;text-align:center;color:#fff}.toggle-icon[_ngcontent-%COMP%]{font-size:4em}.leaderboard-container[_ngcontent-%COMP%]{margin-top:4em;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;align-content:stretch;height:90vh}.leaderboard[_ngcontent-%COMP%]{width:100%}.rank[_ngcontent-%COMP%]{flex-grow:1}.users[_ngcontent-%COMP%]{flex-grow:5}.winpoints[_ngcontent-%COMP%], .difference[_ngcontent-%COMP%]{flex-grow:3}.list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-child{--background: #ffe460;color:#000}.list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(2){--background: #b5b3b3;color:#000}.list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(3){--background: #cd7f32;color:#000}.header[_ngcontent-%COMP%]{--background: var(--ion-color-background);color:#000;margin-top:.3rem;border-radius:8px;--border-color: rgba(255, 255, 255, .9);--color-hover: white !important;--color-activated: white !important;--color-focused: white !important}ion-label[_ngcontent-%COMP%]{font-size:2rem!important;padding:0!important;margin:0!important}h2[_ngcontent-%COMP%]{text-align:center;vertical-align:center!important;margin:0 0 0 5%}"]}),e})()}];let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(M)],m.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,h.u5,i.Pc,L,l.aw.forChild()]]}),e})()}}]);