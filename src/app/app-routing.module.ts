import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterloginformComponent } from './registerloginform/registerloginform.component';

const routes: Routes = [
  {path: 'register', component: RegisterloginformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
