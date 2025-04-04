export const FORM_KEY_ROUTES: Record<string, { route: string; loadComponent: () => Promise<any> }> = {
  'process_test/leader-check': { route: 'leader-check', loadComponent: () => import('../features/process_test/leader-check/leader-check.component').then(m => m.LeaderCheckComponent) },
  'process_test/manager-check': { route: 'manager-check', loadComponent: () => import('../features/process_test/manager-check/manager-check.component').then(m => m.ManagerCheckComponent) }
};
