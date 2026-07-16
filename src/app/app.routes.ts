import { Routes } from '@angular/router';
import { LayoutComponent } from './common-component/layout-component/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      {
        path: 'form-tab',
        loadComponent: () =>
          import('./pages/form-tabs-component/form-tabs-component.component').then(
            (m) => m.FormTabsComponentComponent,
          ),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('./pages/another-component/another-component.component').then(
            (m) => m.AnotherComponentComponent,
          ),
      },
      {
        path: 'add-fruits',
        loadComponent: () =>
          import('./pages/another-component/another-component.component').then(
            (m) => m.AnotherComponentComponent,
          ),
      },
      {
        path: 'multi-level-dropdown',
        loadComponent: () =>
          import('./pages/multi-level-dropdown/multi-level-dropdown.component').then(
            (m) => m.MultiLevelDropdownComponent,
          ),
      },
    ],
  },
];
