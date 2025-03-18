import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterloginformComponent } from './registerloginform/registerloginform.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path: 'register', component: RegisterloginformComponent},
  { path: '', loadChildren: () => import('./layout/secure/secure.module').then(m => m.SecureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
