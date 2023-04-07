import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Eartquakeform } from '../../models/eartquakeform';
import { DatePipe } from '@angular/common';
import { EartquakeFormService } from '../../service/eartquake-form.service';


@Component({
  selector: 'app-depremform',
  templateUrl: './earthquakeform.component.html',
  styleUrls: ['./earthquakeform.component.css']
})
export class DepremformComponent implements OnInit {

  eartquakeForm :Eartquakeform;
  checkoutFormGroup: FormGroup;
  
 
  constructor(private formService:EartquakeFormService,private formBuilder: FormBuilder,private router:Router ){}

    saveForm()
    {
      let ef = new Eartquakeform();
      ef= this.checkoutFormGroup.controls['user'].value;


      //Later I will add my formcontrol validation
      var datePipe = new DatePipe("en-US");
      ef.lastconnectiondate = datePipe.transform(ef.lastconnectiondate, 'yyyy/MM/dd');
      ef.registrationdate  = datePipe.transform(new Date(), 'yyyy/MM/dd');
      const d1 = Date.parse(ef.lastconnectiondate);
      const d2 = Date.parse(ef.registrationdate);
      
      if (d1 > d2) {
        console.log("Son irtibat tarihi kayıt tarihinden büyük olamaz");

        return;
      }

      //Later I will add my formcontrol 2 validation .Time comparation will add.
      var datePipe = new DatePipe("en-US");
      ef.lastconnectiondate = datePipe.transform(ef.lastconnectiondate, 'dd/MM/yyyy');
      ef.registrationtime  = formatDate(new Date(), 'h:mm:ss', 'en');
      ef.registrationdate  = formatDate(new Date(), 'dd/MM/yyyy', 'en');
      
      this.formService.postRequestforUsers(ef).subscribe(res=> {console.log(res)});
      
    }
  
   
    onSubmit()
    {
      if(this.checkoutFormGroup.invalid)
      {
        this.checkoutFormGroup.markAllAsTouched();
        console.log("errorrr!");
        return;
      }
      console.log(this.checkoutFormGroup.controls['user'].value);

      let ef = new Eartquakeform();
      ef= this.checkoutFormGroup.controls['user'].value;
 
      this.saveForm();
     
      this.checkoutFormGroup.reset();

    }

    ngOnInit(): void {
      this.checkoutFormGroup = this.formBuilder.group({
        user: this.formBuilder.group({
          name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
          surname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
          tcnumber: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
          telephone: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
          relation: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(56)]),
          count: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(3)]),
          lastconnectiontime: new FormControl('',[Validators.required]),
          lastconnectiondate:new FormControl('',[Validators.required])
          
        })
      });
    }

    get getName(){ return this.checkoutFormGroup.get('user.name')};
    get getsurName(){ return this.checkoutFormGroup.get('user.surname')};
    get getTCNumber(){ return this.checkoutFormGroup.get('user.tcnumber')};
    get getTelephone(){ return this.checkoutFormGroup.get('user.telephone')};
    get getCount(){ return this.checkoutFormGroup.get('user.count')};
    get getRelation(){ return this.checkoutFormGroup.get('user.relation')};
}
