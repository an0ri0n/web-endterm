import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { DirectivesComponent } from './components/directives/directives.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {AdminGuardGuard} from './admin-guard.guard';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean  {
//     return true;
//   }
//
// }
