import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent} from "./inicio/inicio.component";
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { ServicioComponent } from './servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    BlogComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
