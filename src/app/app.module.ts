import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterloginformComponent } from './registerloginform/registerloginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // ✅ Import this

@NgModule({
  declarations: [
    AppComponent,
    RegisterloginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
