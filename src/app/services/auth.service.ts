import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

interface UserCred {
  username: string;
  password: string;
}

interface TokenResponse {
  token: string;
  refreshToken: string;
  userRole: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5211/api/Authorize/';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  login(userCred: { username: string; password: string }): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}GenerateToken`, userCred)
      .pipe(this.errorHandler.handleApiError()); // Gọi xử lý lỗi
  }

  refreshToken(tokenResponse: TokenResponse): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}GenerateRefreshToken`, tokenResponse)
      .pipe(this.errorHandler.handleApiError());
  }
}

