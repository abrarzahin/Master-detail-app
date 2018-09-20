import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';

/*
  Generated class for the FilmData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleData {

  constructor(public http: HttpClient) {
    console.log('Hello PeopleData Provider');
  }

  getPeople() {
    return this.http.get('https://randomuser.me/api/?results=10&nat=us&seed=d07ade5f51ff3011')
    .pipe(map(res => res.json()))
    .pipe(map(res => res.results));
  }

}
