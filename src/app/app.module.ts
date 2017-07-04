import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed.component';
import { FreedNewsComponent } from './freed-news.component';
import { WhileAwayComponent } from './while-away.component';
import { InterestedCategoryComponent } from './interested-category.component';
import { InterestedTopicsComponent } from './interested-topics.component';
import { DemoContentComponent } from './demo-content.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    FreedNewsComponent,
    WhileAwayComponent,
    InterestedCategoryComponent,
    InterestedTopicsComponent,
    DemoContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
