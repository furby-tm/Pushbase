import { Component, Input, Output } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
) { }

ngOnInit() {
  //
  this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(event => {
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
        currentRoute = currentRoute.children[0];
      }
      this.name = currentRoute.snapshot.data['name'];
    })
  }
}
