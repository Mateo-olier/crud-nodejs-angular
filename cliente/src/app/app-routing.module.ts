import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
const routes: Routes = [

  {
    path:'',
    redirectTo:'/user',
    pathMatch:'full'
  },
  {
    path:'user',
    component:CardsComponent
  },
  {
    path:'user/login',
    component:LoginComponent
  },
  {
    path: 'user/edit/:iduser',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
