import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Country } from '../data/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  LoadCountryList():observable<any>{
    return this.http.get("http://localhost/exam/api/CountryList")
  }


  AddCountry(country:Country){
    this.http.post("http://localhost/exam/api/CountryList",country)
  }


}
