import { Routes } from '@angular/router';
import { LayoutComponent } from './common-component/layout-component/layout/layout.component';

export const routes: Routes = [
      {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/form-tab', pathMatch: 'full'},
      {
        path: 'form-tab', 
        loadComponent: () => import('./pages/form-tabs-component/form-tabs-component.component').then( (m) => m.FormTabsComponentComponent)
      },      
      {
        path: 'another-component', 
        loadComponent: () => import('./pages/another-component/another-component.component').then( (m) => m.AnotherComponentComponent)
      }
    ]
  }
];
