import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Discover } from './discover';

@Injectable()

export class DiscoverService {

private discoveriesUrl = 'api/discoveries'; // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

  getDiscoveries(): Promise<Discover[]> {
    return this.http.get(this.discoveriesUrl)
    .toPromise()
    .then(response => response.json().data as Discover[])
    .catch(this.handleError);
  }

  update(discover: Discover): Promise<Discover> {
  const url = `${this.discoveriesUrl}/${discover.id}`;
  return this.http
    .put(url, JSON.stringify(discover), {headers: this.headers})
    .toPromise()
    .then(() => discover)
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getDiscover(id: number): Promise<Discover>{
    const url = `${this.discoveriesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Discover)
      .catch(this.handleError);
  }

  create(name: string): Promise<Discover> {
  return this.http
    .post(this.discoveriesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Discover)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.discoveriesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
}
