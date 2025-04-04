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

  getTasks1() {
    return this.http.get<any[]>('/engine-rest/task/count?assignee=FEPV009201');
  }

  completeTask(taskId: string, variables: any = {}) {
    const payload = {
      variables: Object.keys(variables).reduce((acc, key) => {
        acc[key] = { value: variables[key], type: 'String' };
        return acc;
      }, {}),
    };
    return this.http.post(`${this.apiUrl}/task/${taskId}/complete`, payload);
  }

  // completeTask(taskId: string, variables: any = {}) {
  //   const payload = {
  //     variables: Object.keys(variables).reduce((acc, key) => {
  //       acc[key] = { value: variables[key], type: 'String' };
  //       return acc;
  //     }, {}),
  //   };

  //   console.log('Payload:', payload); // Logging payload

  //   // Hardcode URL backend Camunda
  //   const camundaUrl = `http://localhost:8080/engine-rest/task/${taskId}/complete`;

  //   return this.http.post(camundaUrl, payload)
  //     .pipe(
  //       tap({
  //         next: (response) => console.log('Task completed successfully:', response),
  //         error: (err) => console.error('Error completing task:', err)
  //       })
  //     );
  // }

  getTaskById(taskId: string) {
    return this.http.get<any>(`${this.apiUrl}/task/${taskId}`);
  }

  completeTask1(taskId: string) {
    return this.http.post(`${this.apiUrl}/task/${taskId}/complete`, {});
  }
}
