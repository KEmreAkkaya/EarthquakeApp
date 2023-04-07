import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepremformComponent } from './earthquakeform.component';

describe('DepremformComponent', () => {
  let component: DepremformComponent;
  let fixture: ComponentFixture<DepremformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepremformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepremformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
