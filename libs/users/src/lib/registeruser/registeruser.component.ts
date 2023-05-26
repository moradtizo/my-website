import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersService } from 'libs/shared/src/lib/services/users.service';

@Component({
  selector: 'users-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  countries: any [] = [];
  // cities: any[] = [];
  // selectedCountry: any = null;
  // form:any= FormGroup ;


constructor(private usersService:UsersService ){}

ngOnInit() {
this.getCounntry()
}
getCounntry(){
  this.usersService.getCountries().subscribe((data:any) =>{
    this.countries = data;
    console.table(data)

  })
}

}
