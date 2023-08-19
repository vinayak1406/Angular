import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnChanges {
  @Input() selectedAddress: string = '';
  lat: number = 0; // Initial latitude
  lng: number = 0; // Initial longitude

  ngOnChanges() {
    if (this.selectedAddress) {
      // Use a geocoding service to convert address to coordinates
      // For now, just use placeholder coordinates for demonstration
      this.lat = 37.7749; // Latitude of a sample location
      this.lng = -122.4194; // Longitude of a sample location
    }
  }
}
