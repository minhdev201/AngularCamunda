import { Routes } from '@angular/router';
import { AdminComponent } from '../theme/layouts/admin-layout/admin-layout.component';
import { FORM_KEY_ROUTES } from './formkey.routes';
import { GuestLayoutComponent } from '../theme/layouts/guest-layout/guest-layout.component';

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
        loadComponent: () => import('../features/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      // Tự động thêm route từ FORM_KEY_ROUTES
      ...Object.values(FORM_KEY_ROUTES).map(({ route, loadComponent }) => ({
        path: `${route}/:taskId`,
        loadComponent,
      })),
      {
        path: 'tasks', // Thêm route cho ManagerCheck
        loadComponent: () =>
          import('../features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('../features/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../features/authentication/auth-register/auth-register.component').then((c) => c.AuthRegisterComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' },
];
