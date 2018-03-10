import {Component, OnInit} from '@angular/core';
import {Language} from '../../model/Language';
import {FormControl} from '@angular/forms';
import {LanguageService} from '../../service/language.service';
import {isUndefined} from "util";

@Component({
  selector: 'app-countrylanguage',
  templateUrl: './countrylanguage.component.html',
  styleUrls: ['./countrylanguage.component.css']
})
export class CountrylanguageComponent implements OnInit {

  languages: Language[];

  language: Language;

  id = new FormControl();

  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
    this.language = new Language();
    this.getLanguages();
  }

  getLanguages(): void {
    this.languageService.getLanguages()
      .subscribe(countries => this.languages = countries);
  }

  processAction(): void {
    if (isUndefined(this.language.language)) {
      this.addLanguage();
    } else {
      this.updateLanguage();
    }
  }

  addLanguage(): void {
    this.languageService.addLanguage(this.language).subscribe(() => this.getLanguages());
  }

  updateLanguage(): void {
    this.languageService.updateLanguage(this.language.language, this.language).subscribe(() => this.getLanguages());
  }

}
