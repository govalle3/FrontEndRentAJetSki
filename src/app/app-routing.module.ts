import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'alquiler-lazy', loadChildren: () => import('./feature/feature-alquiler/alquiler-lazy.module').then(mod => mod.AlquilerLazyModule)},
  { path: 'listar-pagar-alquiler', loadChildren: () => import('./feature/feature-listar-pagar-alquiler/listar-pagar-alquiler.module').then(mod => mod.ListarPagarAlquilerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
