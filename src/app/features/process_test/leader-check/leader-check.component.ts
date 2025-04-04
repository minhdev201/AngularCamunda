import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-leader-check',
  imports: [],
  templateUrl: './leader-check.component.html',
  styleUrl: './leader-check.component.scss'
})
export class LeaderCheckComponent {
  taskId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {
    this.taskId = this.route.snapshot.params['taskId'];
  }

  approve() {
    // Gọi API Camunda để hoàn thành task với kết quả YES
    this.taskService.completeTask(this.taskId, { approved: 'yes' })
      .subscribe(() => {
        console.log('Task completed with YES');
        this.router.navigate(['/tasks']); // Chuyển hướng sau khi hoàn thành
      });
  }

  reject() {
    // Gọi API Camunda để hoàn thành task với kết quả NO
    this.taskService.completeTask(this.taskId, { approved: 'no' })
      .subscribe(() => {
        console.log('Task completed with NO');
        this.router.navigate(['/tasks']);
      });
  }
}
