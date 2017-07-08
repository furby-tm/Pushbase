import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DiscoverService } from './discover.service';
import { Discover } from './discover';
import { OnInit } from '@angular/core';



@Component({
  selector: 'discoveries',
  templateUrl: 'discoveries.component.html',
  styleUrls: ['discoveries.component.css'],
  providers: [Title]
})

export class DiscoveriesComponent implements OnInit {

  discoveries: Discover[] = [];
  detail = "Discover";

  constructor(
        private title: Title,
        private discoverService: DiscoverService
    ){
        let currentTitle = this.title.getTitle();
        this.title.setTitle('Pushbase | Discover');
    }

    ngOnInit(): void {
      this.discoverService.getDiscoveries().then(discoveries => this.discoveries = discoveries.slice(0,4));
    }

}
