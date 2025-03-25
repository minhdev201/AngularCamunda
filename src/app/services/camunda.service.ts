import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CamundaService {
  private apiUrl = '/engine-rest';

  http = inject(HttpClient);

  getTasks() {
    return this.http.get<any[]>(`${this.apiUrl}/task?assignee=FEPV009201`);
  }

  completeTask(taskId: string) {
    return this.http.post(`${this.apiUrl}/task/${taskId}/complete`, {});
  }
}
