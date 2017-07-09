import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  providers: [Title]
})

export class SettingsComponent {
  constructor(
        private title: Title
    ){
        let currentTitle = this.title.getTitle();
        this.title.setTitle('Pushbase | Settings');
    }
}
