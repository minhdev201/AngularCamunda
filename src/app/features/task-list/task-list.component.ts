import { Component, inject } from '@angular/core';
import { CamundaService } from '../../services/camunda.service';
import { CommonModule } from '@angular/common';
import { SignalRService } from '../../services/signalr.service';

@Component({
  selector: 'app-task-list',
  imports: [ CommonModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: any[] = [];

  private camundaService = inject(CamundaService);
  constructor(private signalRService: SignalRService) {}

  ngOnInit() {
    this.loadTasks();

    this.signalRService.listenForTaskUpdates(() => {
      console.log('📢 Nhận tín hiệu cập nhật task, tải lại danh sách...');
      this.loadTasks();
    });
  }

  loadTasks() {
    this.camundaService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  openTaskForm(formKey: string, taskId: string) {
    if (formKey.startsWith('http')) {
      // Nếu formKey là URL, mở trong tab mới
      window.open(`${formKey}?taskId=${taskId}`, '_blank');
    } else if (formKey.startsWith('embedded:app:')) {
      // Nếu formKey là embedded form, trích xuất đường dẫn và điều hướng trong Angular
      const routePath = formKey.replace('embedded:app:forms/', '').replace('.html', '');
      window.open(`/duyet-don-hang/${routePath}`, '_blank');
    } else {
      console.error('Không xác định được formKey:', formKey);
    }
  }
}
