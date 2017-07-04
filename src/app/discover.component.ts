import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.css'],
  providers: [Title]
})

export class DiscoverComponent {
  detail = "Discover";
  constructor(
        private title: Title
    ){
        /*
            This will return 'Hello Angular 2'.
            This is from our index.html file
        */
        let currentTitle = this.title.getTitle();
        /*
            Let's set a new title. This will set it
            to 'Hello Angular 2 from the component'
        */
        this.title.setTitle('Discover');
    }
}
