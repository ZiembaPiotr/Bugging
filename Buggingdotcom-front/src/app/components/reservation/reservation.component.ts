import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Guest} from "../../interfaces/guest";
import {HotelAdmin} from "../../interfaces/hotel-admin";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  adminProfile:HotelAdmin;
  guestProfile:Guest;
  currentProfile:number;
  constructor(private loginService:LoginService) { }

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
  }

  currentUser():number {
    return this.currentProfile;
  }

  onSubmit() {

  }
}
