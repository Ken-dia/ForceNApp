import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AbdoulayeComponent } from './pages/abdoulaye/abdoulaye.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MamadouComponent } from './pages/mamadou/mamadou.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AbdoulayeComponent,
    RegisterComponent,
    CardFormComponent,
    NotFoundComponent,
    MamadouComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
