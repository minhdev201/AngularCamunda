import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports.routes').then((m) => m.REPORTS_ROUTES),
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
