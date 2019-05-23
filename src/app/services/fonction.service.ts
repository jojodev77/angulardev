import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Fonction } from '../models/fonction.model';

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  urlJson: './assets/fonction.json';

  constructor(private http: HttpClient) { }

getFonctionJson(): Observable<Array<Fonction>> {
return this.http.get<Array<Fonction>>('./assets/fonction.json');

}
}
