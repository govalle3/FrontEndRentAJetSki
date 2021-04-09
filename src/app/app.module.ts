import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { AlquilerUsuarioNuevoComponent } from './feature/feature-alquiler-usuario-nuevo/alquiler-usuario-nuevo/alquiler-usuario-nuevo.component';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    AlquilerUsuarioNuevoComponent    
  ],

  imports: [
  BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    FormsModule
  ],

  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
