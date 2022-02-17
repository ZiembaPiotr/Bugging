import { Component, OnInit } from '@angular/core';
import {HotelAdmin} from "../../interfaces/hotel-admin";
import {Guest} from "../../interfaces/guest";
import {LoginService} from "../../services/login.service";
import {Observable} from "rxjs";
import {HotelsService} from "../../services/hotels.service";
import {Hotel} from "../../interfaces/hotel";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adminProfile:HotelAdmin;
  guestProfile:Guest;
  currentProfile:number;
  hotel:Hotel;
  hotels:Hotel[];

  constructor(private loginService:LoginService,
              private hotelService:HotelsService) { }

  ngOnInit(): void {
    if (this.loginService.currentAdminUser !== undefined) {
      this.adminProfile = this.loginService.currentAdminUser;
      this.currentProfile = 1;
    } else if (this.loginService.currentGuestUser !== undefined) {
      this.guestProfile = this.loginService.currentGuestUser;
      this.currentProfile = 2;
    } else {
      this.currentProfile = 3;
    }
    this.hotelService.getHotels().subscribe((hotels) => this.hotels = hotels);
  }

  currentUser():number {
    return this.currentProfile;
  }

  deleteHotel(hotelId:number) {
    this.hotelService.deleteHotel(hotelId).subscribe(
      () => (this.hotels = this.hotels.filter((hotel) => hotel.hotel_id !== hotelId))
    );
  }
}
