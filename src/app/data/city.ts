import { Country } from "./country";

export class City {
    id!:number;
    name!:string
    countryId!:number

    
    country!:Country
}