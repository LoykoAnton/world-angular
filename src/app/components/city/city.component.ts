import {Component, OnInit} from '@angular/core';
import {City} from '../../model/City';
import {FormControl} from '@angular/forms';
import {CityService} from '../../service/city.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: City[];

  city: City;

  id = new FormControl();

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.city = new City();
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }

  deleteCity(): void {
    this.cityService.deleteCity(parseInt(this.id.value.toString(), 10)).subscribe(() => this.getCities());
  }

  processAction(): void {
    if (isUndefined(this.city.ID)) {
      this.addCity();
    } else {
      this.updateCity();
    }
  }

  addCity(): void {
    this.cityService.addCity(this.city).subscribe(() => this.getCities());
  }

  updateCity(): void {
    this.cityService.updateCity(this.city.ID, this.city).subscribe(() => this.getCities());
  }

}
