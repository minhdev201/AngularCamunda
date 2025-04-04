import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Cần cài đặt toastr
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastr: ToastrService) { }

  handleError(error: any) {
    let errorMessage = 'Đã xảy ra lỗi. Vui lòng thử lại.';
    if (error.status === 401) {
      errorMessage = 'Sai thông tin đăng nhập';
    } else if (error.status === 500) {
      errorMessage = 'Lỗi hệ thống, vui lòng thử lại sau';
    }

    // Hiển thị thông báo lỗi
    this.toastr.error(errorMessage, 'Lỗi');

    return throwError(() => new Error(errorMessage));
  }

  // Cải thiện: Tạo method để bắt lỗi trong API
  handleApiError() {
    return catchError(this.handleError.bind(this));
  }
}
