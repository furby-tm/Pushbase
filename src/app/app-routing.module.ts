import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscoveriesComponent } from './discoveries.component';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, data: { name: 'Overview' } },
  { path: 'discover',  component: DiscoveriesComponent, data: { name: 'Discover' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
