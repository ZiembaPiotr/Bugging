import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../../interfaces/hotel";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotel:Hotel;
  @Output() onSearchHotel:EventEmitter<Hotel> = new EventEmitter();

  faInfo = faInfo;

  panelOpenState = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(hotel:Hotel) {
    this.onSearchHotel.emit(hotel);
  }

  goToHotel() {

  }
}
