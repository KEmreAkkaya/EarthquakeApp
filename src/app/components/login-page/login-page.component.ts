import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/auth-response';
import { UserSignInForm } from 'src/app/models/user-sign-in';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  userSignInForm :UserSignInForm;
  checkoutFormGroup: FormGroup;
 
  loading: boolean = false;
  error: string = "";


  constructor(private formService:AuthenticationService,private formBuilder: FormBuilder,private router:Router )
  {

  }
  

  

  loginForm()
    {
      let urForm = new UserSignInForm();
      urForm= this.checkoutFormGroup.controls['user'].value;

     
      let authResponse: Observable<AuthResponse>;

      authResponse = this.formService.signIn(urForm.email,urForm.password);

      authResponse.subscribe({
        next: (response) => {
          this.loading = false;
          this.error = "";
        },
        error: (err) => {
          this.loading = false;
          this.error = err;
        }
      });
    }

   onSubmit()
   {
    if(this.checkoutFormGroup.invalid)
    {
      this.checkoutFormGroup.markAllAsTouched();
      console.log("error!");
      return;
    }

    this.loginForm();

   }


   ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      user: this.formBuilder.group({
        email: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(150),Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
       
        
      })
    });
  }

  get getEmail(){ return this.checkoutFormGroup.get('user.email')};
  get getPassword(){ return this.checkoutFormGroup.get('user.password')};
}
