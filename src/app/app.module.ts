import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountryComponent} from './components/country/country.component';
import {CityComponent} from './components/city/city.component';
import {CountrylanguageComponent} from './components/countrylanguage/countrylanguage.component';
import {CityService} from './service/city.service';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CityComponent,
    CountrylanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
