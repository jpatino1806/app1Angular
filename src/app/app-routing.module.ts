import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path: 'servicio',
    component: ServicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'blog',
    component: BlogComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
