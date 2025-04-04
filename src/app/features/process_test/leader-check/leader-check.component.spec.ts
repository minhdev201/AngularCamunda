import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderCheckComponent } from './leader-check.component';

describe('LeaderCheckComponent', () => {
  let component: LeaderCheckComponent;
  let fixture: ComponentFixture<LeaderCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
