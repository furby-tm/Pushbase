import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed.component';
import { FreedNewsComponent } from './freed-news.component';
import { WhileAwayComponent } from './while-away.component';
import { InterestedCategoryComponent } from './interested-category.component';
import { WhatsHotComponent } from './whats-hot.component';
import { FooterComponent } from './footer.component';
import { DiscoverComponent } from './discover.component';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    FreedNewsComponent,
    WhileAwayComponent,
    InterestedCategoryComponent,
    WhatsHotComponent,
    FooterComponent,
    DiscoverComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
