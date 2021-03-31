import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { AlquilerComponent } from './feature/alquiler/alquiler.component';
import { CrearUsuarioComponent } from './feature/alquiler/crear-usuario/crear-usuario.component';
import { CrearAlquilerComponent } from './feature/alquiler/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './feature/alquiler/listar-alquiler/listar-alquiler.component';
import { PagarAlquilerComponent } from './feature/alquiler/pagar-alquiler/pagar-alquiler.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlquilerComponent,
    CrearUsuarioComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent,
    PagarAlquilerComponent
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
