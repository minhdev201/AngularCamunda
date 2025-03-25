import { Routes } from '@angular/router';

export const SETTING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./setting.component').then((m) => m.SettingComponent),
  },
];
