import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Country} from '../model/Country';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CountryService {

  private CountriesUrl = 'http://localhost:3000/countries';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.CountriesUrl);
  }

  /** POST: add a new hero to the server */
  addCountry(employee: Country): Observable<Country> {
    return this.http.post<Country>(this.CountriesUrl, employee, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteCountry(id: string): Observable<Country> {
    const url = `${this.CountriesUrl}/${id}`;
    return this.http.delete<Country>(url, httpOptions);
  }

  /** PUT: update the hero on the server */
  updateCountry(id: string, personal: Country): Observable<any> {
    const url = `${this.CountriesUrl}/${id}`;
    return this.http.put(url, personal, httpOptions);
  }

}
