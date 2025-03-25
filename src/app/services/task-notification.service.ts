import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class TaskNotificationService {
  private hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7143/notificationHub')
      .build();
  }

  startConnection() {
    this.hubConnection.start().catch(err => console.log(err));
  }

  onTaskReceived(callback: (tasks: any[]) => void) {
    this.hubConnection.on('ReceiveTaskNotification', callback);
  }

  listenForTaskUpdates(callback: (taskId: string, taskName: string) => void) {
    this.hubConnection.on('ReceiveTaskUpdate', callback);
  }
}
