

import { Route } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
export const usersRoutes: Route[] = [

{path: 'login', component:SigninComponent},
{path: 'registerUser', component:RegisteruserComponent}


  ];
