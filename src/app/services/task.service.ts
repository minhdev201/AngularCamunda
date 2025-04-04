import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CamundaService } from './camunda.service';
import { SignalRService } from './signalr.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private camundaService = inject(CamundaService);
  private signalRService = inject(SignalRService);
  private toastr = inject(ToastrService);
  // BehaviorSubject để lưu danh sách tasks và phát sự kiện khi có thay đổi
  private taskSubject = new BehaviorSubject<any[]>([]);
  tasks$ = this.taskSubject.asObservable(); // Observable để component subscribe

  constructor() {
    this.loadTasks();

    // Lắng nghe tín hiệu cập nhật từ SignalR
    this.signalRService.listenForTaskUpdates(() => {
      console.log('📢 Nhận tín hiệu cập nhật task, tải lại danh sách...');
      this.loadTasks();
    });
  }

  /** Gọi API để lấy danh sách task từ Camunda */
  loadTasks() {
    this.camundaService.getTasks().subscribe((tasks) => {
      const previousTaskCount = this.taskSubject.value.length;
      this.taskSubject.next(tasks);

      if (tasks.length > previousTaskCount) {
        this.toastr.info(`Bạn có ${tasks.length - previousTaskCount} nhiệm vụ mới!`, 'Thông báo');
      }
    });
  }

  /** Lấy danh sách task hiện tại */
  getCurrentTasks(): any[] {
    return this.taskSubject.value;
  }

  /**
   * Lấy thông tin chi tiết của một task cụ thể (bao gồm form key)
   * @param taskId ID của task
   */
  getTaskDetails(taskId: string) {
    return this.camundaService.getTaskById(taskId);
  }

  /**
   * Hoàn thành một task với các biến đầu ra
   * @param taskId ID của task
   * @param variables Các biến đầu ra (ví dụ: decision: 'YES' hoặc decision: 'NO')
   */
  completeTask(taskId: string, variables: any) {
    return this.camundaService.completeTask(taskId, variables);
  }
}
