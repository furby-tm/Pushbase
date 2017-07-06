import { Component, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
  providers: [Title]
})

export class OverviewComponent {
  detail = "Overview";
  constructor(
        private title: Title
    ){
        let currentTitle = this.title.getTitle();
        this.title.setTitle('Mocha | Overview');
    }
}
