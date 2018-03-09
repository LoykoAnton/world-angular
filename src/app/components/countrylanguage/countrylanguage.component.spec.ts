import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylanguageComponent } from './countrylanguage.component';

describe('CountrylanguageComponent', () => {
  let component: CountrylanguageComponent;
  let fixture: ComponentFixture<CountrylanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrylanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
