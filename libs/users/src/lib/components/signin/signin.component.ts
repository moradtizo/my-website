import { StorageService } from './../../services/storage.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthResponse } from 'libs/users/models/authResponse';
import { Router } from '@angular/router';



@Component({
  selector: 'users-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  authError= false;
  messageError="Error is from the server, please try again !"
  loginForm = new FormGroup({
    email:new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',Validators.required)
  });
constructor(private authService:AuthService,private storageService:StorageService,private router:Router){}

signin(email:string,password:string){
  this.authService.login(email,password).subscribe({
    next: (res:AuthResponse) => {
      this.storageService.setToken(res.token)
      this.router.navigate(['/blog'])
      this.authError = false
      this.loginForm.reset()
      // console.log(email)
      // console.log(password)
    },
    error:err => {
      this.authError = true
      if(err.status === 400){
        this.messageError =err.error.message
      }
    }
  })
}
submit(){
  if(this.loginForm.invalid){
    return
  }
  this.signin(this.from.email.value,this.from.password.value)

}
get from(){
  return this.loginForm.controls
}
}
