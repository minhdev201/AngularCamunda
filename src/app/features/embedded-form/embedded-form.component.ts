import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-embedded-form',
  imports: [ NgIf ],
  templateUrl: './embedded-form.component.html',
  styleUrl: './embedded-form.component.scss'
})
export class EmbeddedFormComponent {
  formUrl: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const formPath = params['formPath'];
      this.formUrl = `/assets/forms/${formPath}.html`; // Điều chỉnh đường dẫn form phù hợp
    });
  }
}
