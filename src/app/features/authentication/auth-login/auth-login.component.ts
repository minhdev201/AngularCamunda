// project import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { TokenStorageService } from '../../../services/token-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-login',
  imports: [ RouterModule, FormsModule, CommonModule ],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})
export class AuthLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {}

  onLogin() {
    const userCred = { username: this.username, password: this.password };

    this.authService.login(userCred).subscribe({
      next: (response) => {
        this.tokenStorage.setToken(response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('userRole', response.userRole);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.errorMessage = 'Sai thông tin đăng nhập';
      }
    });
  }

  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
