import { Component, OnInit } from '@angular/core';
import { Country } from '../data/country';
import { FormGroup } from '@angular/forms';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit{

licountry!:Country[]
forms!:FormGroup

constructor(private countryService:CountryService){}


ngOnInit(): void {
  this.countryService.LoadCountryList().subscribe({
    next:data=>{
      this.licountry=data
    },
    error:err{
      alert("error")
    }
    
    
  })

}

AddNewCountry(){

}



}
