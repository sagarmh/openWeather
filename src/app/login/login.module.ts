import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  {
    path: '', component: LoginScreenComponent
  }
]

@NgModule({
  declarations: [
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginModule { }
