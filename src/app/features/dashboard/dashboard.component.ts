import { Component, inject, signal } from '@angular/core';
import { CamundaService } from '../../services/camunda.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [ TaskListComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private camundaService = inject(CamundaService);
  tasks = signal<any[]>([]);

  ngOnInit() {
    // this.camundaService.getTasks().subscribe(data => this.tasks.set(data));
  }
}
