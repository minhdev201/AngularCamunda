import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  // Lưu token
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  // Lấy token
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // Xóa token
  removeToken() {
    sessionStorage.removeItem('token');
  }
}
