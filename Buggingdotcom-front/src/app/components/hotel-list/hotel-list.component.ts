import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../interfaces/hotel";
import {HotelsService} from "../../services/hotels.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels:Hotel[] = [];

  constructor(private hotelService:HotelsService) { }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((hotels) => (this.hotels = hotels));
  }

  searchForHotel(hotel:Hotel) {
    this.hotelService.getHotelByHotel(hotel);
  }
}
