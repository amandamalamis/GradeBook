import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: 'create',component: CreateComponent },
  { path: '',component: HomeComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: 'show/:id',component: ShowComponent },
  { path: 'grades',component: AllComponent },


  // use a colon and parameter name to include a parameter in the url
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
