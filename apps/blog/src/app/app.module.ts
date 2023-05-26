import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CardModule } from '@codinwziro/card';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddCtegoryComponent } from './pages/add-category/add-ctegory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ListproductComponent } from './pages/listproduct/listproduct.component';
import { ListOrderComponent } from './pages/order/list-order/list-order.component';
import { AddOrderComponent } from './pages/order/add-order/add-order.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { LoginusersComponent } from './pages/users/loginusers/loginusers.component';
import { RegisterusersComponent } from './pages/users/registerusers/registerusers.component';
import { ListuserComponent } from './pages/users/listuser/listuser.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AuthGuard, AuthInterceptor, UsersModule } from '@codinwziro/users';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, NxWelcomeComponent, ListCategoryComponent, AddCtegoryComponent, EditComponent, AddproductComponent, ListproductComponent, ListOrderComponent, AddOrderComponent, EditproductComponent, LoginusersComponent, RegisterusersComponent, ListuserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CardModule,
    [RatingModule.forRoot()],
    UsersModule

  ],
  providers: [
    AuthGuard,
    { provide:HTTP_INTERCEPTORS, useClass :AuthInterceptor,multi:true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
