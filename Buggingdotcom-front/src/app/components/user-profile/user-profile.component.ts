import {Component, Input, OnInit} from '@angular/core';
import {HotelAdmin} from "../../interfaces/hotel-admin";
import {Guest} from "../../interfaces/guest";
import {Hotel} from "../../interfaces/hotel";
import {Router} from "@angular/router";
import {HotelsService} from "../../services/hotels.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() currentProfile:number;
  @Input() adminProfile:HotelAdmin;
  @Input() guestProfile:Guest;
  hotel:Hotel;
  showHotelButton:boolean;

  constructor(private router:Router,
              private hotelService:HotelsService) { }

  ngOnInit(): void {
    if (this.adminProfile !== undefined && this.adminProfile.hotel_id > 0) {
      this.hotelService.getHotelById(this.adminProfile.hotel_id).subscribe((hotel) => (this.hotel = hotel[0]));
    }
  }

  showHotelButtonFun():boolean {
    console.log(this.adminProfile.hotel_id)
    if (this.getHotel() !== undefined && this.adminProfile.hotel_id > 0) {
      this.showHotelButton = false;
      return false;
    } else {
      this.showHotelButton = true;
      return true;
    }
  }

  getHotel():Hotel {
    return this.hotel;
  }

  navigateToAnotherPage() {
    if(this.showHotelButton) {
      this.router.navigate(['/addHotel']).then();
    } else {
      this.router.navigate(['/editHotel']).then();
    }
  }
}
