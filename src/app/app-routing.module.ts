import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CityComponent} from './components/city/city.component';
import {CountryComponent} from './components/country/country.component';
import {CountrylanguageComponent} from './components/countrylanguage/countrylanguage.component';

const routes: Routes = [
  {path: '', redirectTo: '/cities', pathMatch: 'full'},
  {path: 'cities', component: CityComponent},
  {path: 'countries', component: CountryComponent},
  {path: 'languages', component: CountrylanguageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
