import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedFormComponent } from './embedded-form.component';

describe('EmbeddedFormComponent', () => {
  let component: EmbeddedFormComponent;
  let fixture: ComponentFixture<EmbeddedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
