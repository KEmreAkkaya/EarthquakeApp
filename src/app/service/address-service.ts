import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "../models/address";
import { Keys } from "../config/config";

@Injectable()
export class AddressService
{
   //You must change this code with yours
   private url:string = Keys.url;

   constructor(private http:HttpClient)
   {
    
   }
   public getAddresses(): Observable<Address[]>
   {
    return this.http.get<Address[]>(this.url+"addresses.json");
                                    
   }

   postRequestforAdresses(address:Address):Observable<Address>
   {
    return this.http.post<Address>(this.url+"addresses.json",address);                                
   }
}