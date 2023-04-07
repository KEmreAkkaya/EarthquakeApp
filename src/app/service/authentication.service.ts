import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {Keys} from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //You must change this code with yours
  private api_key =  Keys.api_key;
  
  private url :string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.api_key;

  private signIn_url:string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.api_key;

  constructor(private http:HttpClient) { }


  register(email:string,password: string):Observable<GetResponse>
  {
    return this.http.post<GetResponse>(this.url,{
      email:email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError));
  }

  
  signIn(email:string,password: string):Observable<GetResponse>
  {
    return this.http.post<GetResponse>(this.signIn_url,{
      email:email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let message = "Hata Oluştu";

    if(err.error.error) {
      switch(err.error.error.message) {
        case "EMAIL_EXISTS":
          message = "Bu Mail adresi zaten kullanılıyor."
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Lütfen bir süre bekleyip tekrar deneyiniz."
          break;
        case "EMAIL_NOT_FOUND":
          message = "Mail adresi bulunamadı.";
          break;
        case "INVALID_PASSWORD":
          message ="Hatalı parola girdiniz.";
          break;
      }
    }

    return throwError(() => message);
  }
}

interface GetResponse
{
  idToken:string;
  email: string;
  refreshToken:string;
  expiresIn:string;
  localId:string;

}
