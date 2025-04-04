import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCheckComponent } from './manager-check.component';

describe('ManagerCheckComponent', () => {
  let component: ManagerCheckComponent;
  let fixture: ComponentFixture<ManagerCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
