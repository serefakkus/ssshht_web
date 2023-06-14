import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule, Route, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { GizlilikPolitikasiComponent } from './gizlilik-politikasi/gizlilik-politikasi.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
   {path:"**",component: HomePageComponent},
  {path:"gizlilik-politikasi",component:GizlilikPolitikasiComponent},
  {path:"",component:HomePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InfoHeaderComponent,
    GizlilikPolitikasiComponent,
    IletisimComponent,
    HomePageComponent,
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
