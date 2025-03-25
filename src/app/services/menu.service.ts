import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface MenuItem {
  title: string;
  path?: string;
  icon: string;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenu(): Observable<MenuItem[]> {
    const menuItems: MenuItem[] = [
      { title: 'DASHBOARD', path: '/dashboard', icon: 'fa fa-home' },
      {
        title: 'REPORTS',
        icon: 'fa fa-chart-bar',
        children: [
          {
            title: 'Sales',
            icon: 'fa fa-chart-bar',
            children: [{ title: 'Monthly', path: '/reports/sales/monthly', icon: 'fa fa-home' }],
          },
        ],
      },
      {
        title: 'setting',
        path: '/setting', icon: 'fa fa-home'
      },
    ];

    return of(menuItems);
  }
}
