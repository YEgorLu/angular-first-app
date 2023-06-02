import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Housinglocation} from "../housinglocation";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-housing-location[housingLocation]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <a [routerLink]="['\details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit{
  @Input({required: true}) housingLocation!: Housinglocation;
  data: string | undefined;

  ngOnInit() {
    this.data = Object.entries(this.housingLocation).map(([k, v]) => `${k}: ${v}`).join(', ');
    console.log(this.housingLocation)
    console.log(this.data);
  }
}
