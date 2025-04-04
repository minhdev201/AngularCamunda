import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FORM_KEY_ROUTES } from '../routes/formkey.routes';

@Injectable({
  providedIn: 'root',
})
export class FormKeyRouterService {
  constructor(private router: Router) { }

  navigateToForm(formKey: string, taskId: string) {
    const entry = FORM_KEY_ROUTES[formKey];
    if (entry) {
      this.router.navigate([`/${entry.route}`, taskId]);
    } else {
      console.warn(`Unsupported form key: ${formKey}`);
    }
  }
}

