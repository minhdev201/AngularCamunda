import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({ providedIn: 'root' })
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  private isListenerRegistered = false; // 🔹 Thêm biến kiểm tra

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5211/notificationHub')
      .build();

    this.hubConnection.start()
      .then(() => console.log('✅ Kết nối SignalR thành công'))
      .catch(err => console.error('❌ Lỗi kết nối SignalR:', err));
  }

  listenForTaskUpdates(callback: (taskId: string, taskName: string) => void) {
    if (!this.isListenerRegistered) { // 🔹 Chỉ đăng ký nếu chưa có listener nào
      this.hubConnection.on('ReceiveTaskUpdate', (taskId, taskName) => {
        console.log(`📩 Nhận SignalR: ${taskId} - ${taskName}`);
        callback(taskId, taskName);
      });
      this.isListenerRegistered = true; // 🔹 Đánh dấu đã đăng ký listener
    }
  }
}
