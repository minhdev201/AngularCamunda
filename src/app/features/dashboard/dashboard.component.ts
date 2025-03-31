import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  imports: [ TaskListComponent, TranslateModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
