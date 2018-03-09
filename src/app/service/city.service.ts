import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {City} from '../model/City';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CityService {

  private CitiesUrl = 'http://localhost:3000/cities';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.CitiesUrl);
  }

  /** POST: add a new hero to the server */
  addCity(employee: City): Observable<City> {
    return this.http.post<City>(this.CitiesUrl, employee, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteCity(id: number): Observable<City> {
    const url = `${this.CitiesUrl}/${id}`;
    return this.http.delete<City>(url, httpOptions);
  }

  /** PUT: update the hero on the server */
  updateCity(personal: City): Observable<any> {
    return this.http.put(this.CitiesUrl, personal, httpOptions);
  }

}
