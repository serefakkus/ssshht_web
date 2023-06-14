import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GizlilikPolitikasiComponent } from './gizlilik-politikasi/gizlilik-politikasi.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

  {path:"gizlilik-politikasi",component:GizlilikPolitikasiComponent},
  {path:"",component:HomePageComponent},
   {path:"**",component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
