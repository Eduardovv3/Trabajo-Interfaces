import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutModule } from './layouts/full/layout.component';

export const Approutes: Routes = [           
      {
        path: 'layout',
        loadChildren: () => import('./layouts/full/layout.module').then(m => m.LayoutModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },     
      { path: '**', redirectTo: '/dashboard' },
];
