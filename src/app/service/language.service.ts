import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Language} from '../model/Language';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LanguageService {

  private LanguagesUrl = 'http://localhost:3000/languages';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.LanguagesUrl);
  }

  /** POST: add a new hero to the server */
  addLanguage(employee: Language): Observable<Language> {
    return this.http.post<Language>(this.LanguagesUrl, employee, httpOptions);
  }

  /** PUT: update the hero on the server */
  updateLanguage(language: string, personal: Language): Observable<any> {
    const url = `${this.LanguagesUrl}/${language}`;
    return this.http.put(url, personal, httpOptions);
  }

}
