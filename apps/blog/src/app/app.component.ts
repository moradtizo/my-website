

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@codinwziro/users';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'codinwziro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  email : string| null = null;
  user :string | null = null;
  token :string | null = null
  constructor(private storageService:StorageService,private router:Router){

  }


  ngOnInit(): void {
    this.storageService.user.subscribe((res:string | null) =>
    this.user = res
    )
    this.storageService.token$.subscribe((res:string | null) =>
    this.token = res
    )

      this.storageService.email.subscribe((res:string | null)=>{
        this.email = res;
      })
      // this.email = this.storageService.getEmail() ||'';
  }
  // email(email:string){
  //   this.storageService.gettoken(email)
  // }
  logOut(){
    this.storageService.removeToken()
    // this.storageService.removeEmail()
    this.router.navigate(['/login'])  }

    login(): boolean{
      const token =this.storageService.gettoken()
      return !!token
    }
}
