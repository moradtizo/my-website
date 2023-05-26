// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersService } from './../../../../../../../libs/shared/src/lib/services/users.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ResUser, User } from './../../../../../../../libs/shared/src/lib/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-user-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  Users: User[] | undefined=[]
  constructor(private usersService: UsersService){}
  ngOnInit(): void {
      this.getOrders()
  }

  getOrders(){
    this.usersService.getAllUser().subscribe((res: ResUser) =>
     this.Users = res.users
     );
  }
}

