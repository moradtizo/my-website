import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './lib.routers';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  imports: [CommonModule,RouterModule.forChild(usersRoutes),ReactiveFormsModule,],
  declarations: [
    SigninComponent,
    RegisteruserComponent
  ],
})
export class UsersModule {}
