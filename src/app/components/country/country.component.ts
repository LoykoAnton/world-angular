import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Country} from "../../model/Country";
import {CountryService} from "../../service/country.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  getCounties: any;

  countries: Country[];

  country: Country;

  id = new FormControl();

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.country = new Country();
    this.getCountry();
  }

  getCountry(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  deleteCountry(): void {
    this.countryService.deleteCountry(parseInt(this.id.value.toString(), 10)).subscribe(() => this.getCountry());
  }

  addCountry(): void {
    this.countryService.addCountry(this.country).subscribe(() => this.getCounties());
  }

}
