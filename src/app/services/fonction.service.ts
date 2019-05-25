import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Fonction } from '../models/fonction.model';
import { Subject, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Method } from '../models/Method';
@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  urlJson: './assets/fonction.json';
donne: Fonction;
  constructor(private http: HttpClient) { }

// affichez donne fonction
getFonctionJson(): Observable<Array<Fonction>> {
return this.http.get<Array<Fonction>>('./assets/fonction.json');
}
getFonctionJsonTrier(): Observable<Array<Method>> {
return this.http.get<Array<Method>>('./assets/fonction.json').pipe(
  map(
    (articles: Method[]) => articles.filter(
      (article: Method) => article.typeFonction === 'Trier'
    )
  ));
}
}
