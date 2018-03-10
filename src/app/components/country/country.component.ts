import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Country} from '../../model/Country';
import {CountryService} from '../../service/country.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Country[];

  country: Country;

  code = new FormControl();

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.country = new Country();
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  deleteCountry(): void {
    this.countryService.deleteCountry(this.code.value.toString()).subscribe(() => this.getCountries());
  }

  processAction(): void {
    if (isUndefined(this.country.Code)) {
      this.addCountry();
    } else {
      this.updateCountry();
    }
  }

  addCountry(): void {
    this.countryService.addCountry(this.country).subscribe(() => this.getCountries());
  }

  updateCountry(): void {
    this.countryService.updateCountry(this.country.Code, this.country).subscribe(() => this.getCountries());
  }

}
