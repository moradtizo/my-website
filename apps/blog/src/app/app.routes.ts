import { LoginusersComponent } from './pages/users/loginusers/loginusers.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { AddCtegoryComponent } from './pages/add-category/add-ctegory.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListproductComponent } from './pages/listproduct/listproduct.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ListOrderComponent } from './pages/order/list-order/list-order.component';
import { AddOrderComponent } from './pages/order/add-order/add-order.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { RegisterusersComponent } from './pages/users/registerusers/registerusers.component';
import { ListuserComponent } from './pages/users/listuser/listuser.component';
import { AuthGuard } from '@codinwziro/users';

export const appRoutes: Route[] = [

{path: 'blog',component:DashboardComponent,canActivate:[AuthGuard]},
{path: 'blog/category',component:ListCategoryComponent,canActivate:[AuthGuard]},
{path: 'blog/addCategory',component:AddCtegoryComponent,canActivate:[AuthGuard]},
{path: 'blog/edit/:id',component:EditComponent,canActivate:[AuthGuard]},
{path: 'blog/listProduct',component:ListproductComponent,canActivate:[AuthGuard]},
{path: 'blog/addProduct',component:AddproductComponent,canActivate:[AuthGuard]},
{path: 'blog/editProduct/:id',component:EditproductComponent,canActivate:[AuthGuard]},
{path: 'blog/listOrder',component:ListOrderComponent,canActivate:[AuthGuard]},
{path: 'blog/addOrder',component:AddOrderComponent,canActivate:[AuthGuard]},
{path: 'blog/loginUsers',component:LoginusersComponent,canActivate:[AuthGuard]},
{path: 'blog/registerUsers',component:RegisterusersComponent,canActivate:[AuthGuard]},
{path: 'blog/listUsers',component:ListuserComponent,canActivate:[AuthGuard]},








];


