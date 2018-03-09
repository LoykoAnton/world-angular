import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Language} from '../model/Language';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CityService {

  private LanguagesUrl = 'http://localhost:3000/countrylanguage';  // URL to web api

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

  /** DELETE: delete the hero from the server */
  deleteLanguage(id: number): Observable<Language> {
    const url = `${this.LanguagesUrl}/${id}`;
    return this.http.delete<Language>(url, httpOptions);
  }

  /** PUT: update the hero on the server */
  updateLanguage(personal: Language): Observable<any> {
    return this.http.put(this.LanguagesUrl, personal, httpOptions);
  }

}
