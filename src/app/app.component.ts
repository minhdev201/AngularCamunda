import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MenuService } from './services/menu.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

interface MenuItem {
  title: string;
  path?: string;
  icon: string;
  children?: MenuItem[];
  open?: boolean; // Thêm thuộc tính để toggle
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  menuItems$: Observable<MenuItem[]>;

  constructor(
    private translate: TranslateService,
    private menuService: MenuService
  ) {
    this.menuItems$ = this.menuService.getMenu();
    const savedLang = localStorage.getItem('lang') || 'vi'; // Lấy ngôn ngữ từ localStorage hoặc mặc định là 'en'

    this.translate.setDefaultLang(savedLang); // Chỉ đặt mặc định, không load file
    this.translate.use(savedLang); // Chỉ load 1 file ngôn ngữ duy nhất
  }

  toggleMenu(item: MenuItem) {
    if (item.children) {
      item.open = !item.open;
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Lưu lại để dùng sau
  }
}
