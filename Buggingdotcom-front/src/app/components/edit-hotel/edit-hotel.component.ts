import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Hotel} from "../../interfaces/hotel";
import {HotelsService} from "../../services/hotels.service";

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {

  adminHotels: Hotel[];
  constructor(private loginService:LoginService,
              private hotelService:HotelsService) { }

  ngOnInit(): void {
  }

}
