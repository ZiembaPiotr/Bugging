import { Component, OnInit } from '@angular/core';
import {GuestLoginAttempt} from "../../interfaces/guest";
import {HotelsService} from "../../services/hotels.service";
import {Hotel} from "../../interfaces/hotel";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private hotelService:HotelsService) { }

  ngOnInit(): void {
  }

  loginAttempt(loginAttempt:GuestLoginAttempt):Boolean {
    return true;
  }

  addHotel(hotel:Hotel) {
    this.hotelService.addHotel(hotel);
  }
}
