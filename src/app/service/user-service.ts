import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Keys } from "../config/config";

@Injectable()
export class UserService
{
   public url:string = Keys.url;

   constructor(private http:HttpClient)
   {
    
   }
   public getUsers(): Observable<User[]>
   {
    return this.http.get<User[]>(this.url+"users.json");
                                    
   }
 

   getRequestforUsersById(id:string):Observable<User>
   {
    return this.http.get<User>(this.url+"users/"+id+".json");
   }


   postRequestforUsers(user:User):Observable<User>
   {
    return this.http.post<User>(this.url+"users.json",user);                                
   }
}