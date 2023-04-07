import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import { Map, NavigationControl } from 'maplibre-gl';
import { Address } from '../../models/address';
import { AddressService } from '../../service/address-service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers:[AddressService]
})
export class MapComponent {
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  addresses:Address[] | undefined =[];
  marker = new maplibregl.Marker();
  @Input() markers: maplibregl.Marker[]=[];



  constructor(private addressService:AddressService) { 
  
  }

  ngOnInit() { 

  
  }

  

  ngAfterViewInit() {
   
   
    const myAPIKey = 'eaf14d8ed7a443b98089e1a991e88808';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

    const initialState = {
      lng: 36,
      lat: 38,
      zoom: 5,
    };

   

    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });


    
    map.addControl(new NavigationControl());
    

    this.addressService.getAddresses().subscribe(result => {
      let x=0;
      for(const key in result) {
    
        
        this.addresses.push({ ...result[key], address_id: key });
       
        var marker = new maplibregl.Marker({
          color: "#151515",
          draggable: false
        }).setLngLat([result[key].longitude, result[key].latitude])
        .addTo(map);
      
        x=x+1;

             
      }
     
  });
  

  }
}

