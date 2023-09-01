import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarNotaComponent } from './criar-nota/criar-nota.component';
import { CorpoComponent } from './corpo/corpo.component';

const routes: Routes = [
  {
    path: 'home',
    component: CorpoComponent
  },
  {
    path: 'criar-nota',
    component: CriarNotaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
