import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../interfaces/hotel";
import {HotelsService} from "../../services/hotels.service";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {Opinion} from "../../interfaces/opinion";
import {OpinionService} from "../../services/opinion.service";
import {RoomsService} from "../../services/rooms.service";
import {Room} from "../../interfaces/room";
import {first} from "rxjs";

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.css']
})
export class SingleHotelComponent implements OnInit {
  hotelId:number;
  faStar = faStar;
  hotel:Hotel;
  opinions:Opinion[];
  rooms:Room[];

  constructor(private hotelService:HotelsService,
              private opinionService:OpinionService,
              private roomsService:RoomsService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.hotelId = event['hotel_id'];
    });
    this.hotelService.getHotelById(this.hotelId).subscribe((hotel) => {
      this.hotel = hotel[0];
    });
    this.opinionService.getOpinionsForId(this.hotelId).subscribe((opinions) => (this.opinions = opinions));
    this.roomsService.getRoomsForId(this.hotelId).subscribe((rooms) => (this.rooms = rooms));
  }

  getNumberOfStars():number[] {
    return Array(this.hotel.stars).fill(1);
  }

  getName():string {
    return this.hotel.name;
  }

  getLocation():string {
    return `${this.hotel.country}, ${this.hotel.city}, ${this.hotel.address}`;
  }

}
