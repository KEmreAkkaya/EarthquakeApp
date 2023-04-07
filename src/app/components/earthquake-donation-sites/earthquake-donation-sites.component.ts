import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sites } from '../../models/sites';
import { SitesRepository } from '../../models/sites-repository';

@Component({
  selector: 'app-earthquake-donation-sites',
  templateUrl: './earthquake-donation-sites.component.html',
  styleUrls: ['./earthquake-donation-sites.component.css']
})
export class EarthquakeDonationSitesComponent {
  sites: Sites[];
  sitesRepository: SitesRepository;

  constructor(private route: ActivatedRoute) { 
    this.sitesRepository = new SitesRepository();
  }

  ngOnInit(): void {
    
    
        this.sites= this.sitesRepository.getSites();
      
    
  }
}
