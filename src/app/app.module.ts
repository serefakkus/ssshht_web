import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule, Route, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InfoHeaderComponent } from './info-header/info-header.component';

const routes : Routes=[
  {path:"welcome",component:WelcomeComponent},
  {path:"",component:AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InfoHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
