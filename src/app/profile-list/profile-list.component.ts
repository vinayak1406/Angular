import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  profiles = [
    { name: 'John Doe', description: 'Software Developer', address: '123 Main St' },
    // Add more profiles
  ];
  selectedAddress: string = '';

  showOnMap(address: string) {
    this.selectedAddress = address;
  }
}
