import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eartquakeform } from '../models/eartquakeform';
import { Keys } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class EartquakeFormService {

  public url:string = Keys.url;

  constructor(private http:HttpClient) { }


  postRequestforUsers(userForm:Eartquakeform):Observable<Eartquakeform>
  {
   return this.http.post<Eartquakeform>(this.url+"form.json",userForm);                                
  }
}
