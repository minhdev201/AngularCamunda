import { Routes } from '@angular/router';

export const DUYETDONHANG_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./duyet-don-hang.component').then((m) => m.DuyetDonHangComponent),
  },
  { path: 'assign-reviewer',
    loadComponent: () =>
      import('../../../assets/forms/assign-reviewer/assign-reviewer.component').then(m => m.AssignReviewerComponent) },
];
