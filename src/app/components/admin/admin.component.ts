import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] ,
  providers:[UserService]
})
export class AdminComponent implements OnInit{

  user:User | undefined;
  constructor(private route:ActivatedRoute, private userService:UserService)
  {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const userid= params["id"];
      this.userService.getRequestforUsersById(userid)
              .subscribe(result=>
                {
                  this.user = { ...result ,id:userid }
                })
    });
    
  }
}
