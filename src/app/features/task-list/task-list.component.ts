import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { FormKeyRouterService } from '../../services/FormKeyRouterService.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: any[] = [];
  tasks1: any;

  private taskService = inject(TaskService);
  private formKeyRouter = inject(FormKeyRouterService);

  ngOnInit() {
    // Subscribe vào tasks$ để nhận cập nhật real-time
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
    });
  }

  openTask(taskId: string, formKey: string) {
    this.formKeyRouter.navigateToForm(formKey, taskId);
  }
}
