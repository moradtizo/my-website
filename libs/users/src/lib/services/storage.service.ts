import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
private readonly APP_TOKEN = 'app_token'
// private readonly APP = 'email'




user = new BehaviorSubject<string|null>(null);

token$= new BehaviorSubject<string | null>(this.gettoken());

email = new BehaviorSubject<string | null>(null);

setEmail(email:string | null){
  this.email.next(email)
}
setUser(name: string|null){
  this.user.next(name);
}

setTtoken(data: string|null){
  this.token$.next(data);
}

setToken(data:string){
  localStorage.setItem(this.APP_TOKEN,data)
}
gettoken(){
  return localStorage.getItem(this.APP_TOKEN)

}
removeToken(){
  localStorage.removeItem(this.APP_TOKEN)
  
}
// setEmail(data:string){
//   // localStorage.setItem(this.APP,data)
//   this.emailSubject.next(data)
// }
// getEmail(){
//   return localStorage.getItem(this.APP)
// }
// removeEmail(){
//   // localStorage.removeItem(this.APP)
//   this.emailSubject.next('')
// }
expiredToken(expiration:number){
  return Math.floor(new Date().getTime()/ 1000)>= expiration
}
getPayload(){
  const token = this.gettoken()
    if( token && token.split('.').length == 3){

    const payload =token.split('.')[1]
    const data = JSON.parse(atob(payload));

    this.setUser(data.name)
    this.setTtoken(data.token)


    return data

  }
  return null
}
}
