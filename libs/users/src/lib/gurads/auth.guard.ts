import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { CanActivate,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService:StorageService,private router:Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token:string|null= this.storageService.gettoken();
    if(!token){
      this.router.navigate(['/login'])
      return false;
    }
    if(token.split('.').length == 3){

      const payload =token.split('.')[1]

      const {isAdmin,exp,email,name} = JSON.parse(atob(payload));

      this.storageService.setEmail(email)
      this.storageService.setUser(name)
       this.storageService.setTtoken(token)
       console.log(this.storageService.setTtoken(token), 'fhoizehfoizhfie')

      return isAdmin && !this.storageService.expiredToken(exp)
    }
    else{
      this.router.navigate(['/login'])
      return false
    }



  }

}
