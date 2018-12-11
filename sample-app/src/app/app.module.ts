import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { AllComponent } from './all/all.component';


@NgModule({
   declarations: [
      AppComponent,
      PagenotfoundComponent,
      CreateComponent,
      HomeComponent,
      EditComponent,
      ShowComponent,
      AllComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      HttpService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
