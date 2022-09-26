import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ConnexionGuard } from './guards/connexion.guard';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"admin", component:AdminComponent, canActivate:[ConnexionGuard]},
  {path:"connexion", component:ConnexionComponent},
  //{path:"news", component:NewsComponent},
  //{path:"new/:id", component:NewComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
