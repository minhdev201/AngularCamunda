import { Routes } from '@angular/router';

export const REPORTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reports.component').then((m) => m.ReportsComponent),
  },
  {
    path: 'sales',
    loadComponent: () =>
      import('./sales/sales.component').then((m) => m.SalesComponent),
    children: [
      {
        path: 'monthly',
        loadComponent: () =>
          import('./sales/monthly/monthly.component').then(
            (m) => m.MonthlyComponent
          ),
      },
    ],
  },
];
