import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-manager-check',
  imports: [],
  templateUrl: './manager-check.component.html',
  styleUrl: './manager-check.component.scss'
})
export class ManagerCheckComponent {
  taskId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {
    this.taskId = this.route.snapshot.params['taskId'];
  }

  approve() {
    // Gọi API Camunda để hoàn thành task với kết quả Approve
    this.taskService.completeTask(this.taskId, { approved: 'APPROVED' })
      .subscribe(() => {
        console.log('Task completed with APPROVED');
        this.router.navigate(['/tasks']);
      });
  }

  reject() {
    // Gọi API Camunda để hoàn thành task với kết quả Reject
    this.taskService.completeTask(this.taskId, { approved: 'REJECTED' })
      .subscribe(() => {
        console.log('Task completed with REJECTED');
        this.router.navigate(['/tasks']);
      });
  }
}
