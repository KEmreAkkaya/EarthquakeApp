import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationForm } from '../../models/user-registration';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthResponse } from 'src/app/models/auth-response';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  userRegistrationForm :UserRegistrationForm;
  checkoutFormGroup: FormGroup;

  loading: boolean = false;
  error: string = "";
  message:string ="";

  constructor(private formService:AuthenticationService,private formBuilder: FormBuilder,private router:Router )
  {

  }
  

  

  saveForm()
    {
      let urForm = new UserRegistrationForm();
      urForm= this.checkoutFormGroup.controls['user'].value;
  
      let authResponse: Observable<AuthResponse>;

      authResponse = this.formService.register(urForm.email,urForm.password);

      authResponse.subscribe({
        next: (response) => {
          this.loading = false;
          this.error = "Kayıt Başarılı";
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
      console.log("errorrr!");
      return;
    }

    this.saveForm();

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
