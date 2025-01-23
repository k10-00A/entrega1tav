import { NgModule } from '@angular/core';
import {PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './registrar/registrar.page';
import { LoginPage } from './login/login.page';
import { OlvidarPage } from './olvidar/olvidar.page';
import { InicioPage } from './inicio/inicio.page';
const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar', 
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'olvidar', 
    loadChildren: () => import('./olvidar/olvidar.module').then( m => m.OlvidarPageModule)
  },
  {
    path: 'presu',
    loadChildren: () => import('./presu/presu.module').then( m => m.PresuPageModule)
  },
  {
    path: 'inicio', 
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

  {
    path: 'registro-gasto',
    loadChildren: () => import('./registro-gasto/registro-gasto.module').then( m => m.RegistroGastoPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosPageModule)
  },
  
  {
    path: 'presupuestos',
    loadChildren: () => import('./presupuestos/presupuestos.module').then( m => m.PresupuestosPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
