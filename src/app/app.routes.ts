import { Routes } from '@angular/router';
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./features/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'sample-page',
        loadComponent: () =>
          import('./features/reports/reports.component').then((m) => m.ReportsComponent),
      },
    ]
  },

  {
    path: 'setting',
    loadChildren: () =>
      import('./features/setting/setting.routes').then((m) => m.SETTING_ROUTES),
  },
  {
    path: 'duyet-don-hang',
    loadChildren: () =>
      import('./features/duyet-don-hang/duyet-don-hang.routes').then((m) => m.DUYETDONHANG_ROUTES),
  },
  {
    path: 'embedded-form/:formPath',
    loadComponent: () =>
      import('./features/embedded-form/embedded-form.component').then(
        (m) => m.EmbeddedFormComponent
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];
