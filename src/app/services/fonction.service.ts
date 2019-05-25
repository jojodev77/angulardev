import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Fonction } from '../models/fonction.model';
import { Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  urlJson: './assets/fonction.json';
fonction$ = new Subject<any>();
  constructor(private http: HttpClient) { }

getFonctionJson(): Observable<Array<Fonction>> {
return this.http.get<Array<Fonction>>('./assets/fonction.json');


}

getJson(): Observable<Array<Fonction>>  {
  const fonctionJson = this.http.get<Array<Fonction>>('./assets/fonction.json');
  return fonctionJson;
}
updateFonctionS() {
this.fonction$.next(this.getFonctionJson());
return this.fonction$.asObservable();
}
}
