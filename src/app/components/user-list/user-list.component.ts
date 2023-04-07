import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../../models/address';
import { User } from '../../models/user';
import { UserRepository } from '../../models/user-repository';
import { AddressService } from '../../service/address-service';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService,AddressService]
})
export class UserListComponent {
  users: User[] = [];
  userRepository: UserRepository;




  constructor(private route: ActivatedRoute,private userService:UserService,private addressService:AddressService) { 
   
  }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(result => {
      for(const key in result) {
        this.users.push({ ...result[key], id: key });
      }
  });


   
}

createAddress()
{

 //this.addressService.postRequestforAdresses(this.address).subscribe(res=> {console.log(res)});
}

}
