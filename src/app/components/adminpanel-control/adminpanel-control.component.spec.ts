import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelControlComponent } from './adminpanel-control.component';

describe('AdminpanelControlComponent', () => {
  let component: AdminpanelControlComponent;
  let fixture: ComponentFixture<AdminpanelControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpanelControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpanelControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
