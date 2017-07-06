import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'trending',
  templateUrl: 'trending.component.html',
  styleUrls: ['trending.component.css'],
  providers: [Title]
})

export class TrendingComponent {
  constructor(
        private title: Title
    ){
        let currentTitle = this.title.getTitle();
        this.title.setTitle('Mocha | Trending');
    }
}
