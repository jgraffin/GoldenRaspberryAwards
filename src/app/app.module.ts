import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearsMultipleWinnersComponent } from './components/panels/years-multiple-winners/years-multiple-winners.component';
import { StudiosWinnersComponent } from './components/panels/studios-winners/studios-winners.component';
import { ProducersLongestShortestIntervalComponent } from './components/panels/producers-longest-shortest-interval/producers-longest-shortest-interval.component';
import { ListMovieWinnersByYearComponent } from './components/panels/list-movie-winners-by-year/list-movie-winners-by-year.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    HeaderComponent,
    SidebarComponent,
    YearsMultipleWinnersComponent,
    StudiosWinnersComponent,
    ProducersLongestShortestIntervalComponent,
    ListMovieWinnersByYearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
