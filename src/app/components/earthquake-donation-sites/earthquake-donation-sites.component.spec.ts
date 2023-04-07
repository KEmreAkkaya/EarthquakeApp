import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeDonationSitesComponent } from './earthquake-donation-sites.component';

describe('EarthquakeDonationSitesComponent', () => {
  let component: EarthquakeDonationSitesComponent;
  let fixture: ComponentFixture<EarthquakeDonationSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthquakeDonationSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthquakeDonationSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
