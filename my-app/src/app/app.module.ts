import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, MatFormFieldModule, MatInputModule, MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
