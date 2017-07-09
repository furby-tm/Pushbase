import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed.component';
import { FreedNewsComponent } from './freed-news.component';
import { WhileAwayComponent } from './while-away.component';
import { InterestedCategoryComponent } from './interested-category.component';
import { WhatsHotComponent } from './whats-hot.component';
import { FooterComponent } from './footer.component';
import { DiscoveriesComponent } from './discoveries.component';
import { OverviewComponent } from './overview.component';
import { TrendingComponent } from './trending.component';
import { SettingsComponent } from './settings.component';

import { DiscoverService } from './discover.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    FreedNewsComponent,
    WhileAwayComponent,
    InterestedCategoryComponent,
    WhatsHotComponent,
    FooterComponent,
    DiscoveriesComponent,
    OverviewComponent,
    TrendingComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ DiscoverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
