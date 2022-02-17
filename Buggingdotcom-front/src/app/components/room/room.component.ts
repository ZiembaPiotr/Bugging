import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../../interfaces/room";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  showCalendar:boolean = false;
  @Input() room:Room;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  matStartDate: Date;
  matEndDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

  reservation() {
    this.showCalendar = !this.showCalendar;
  }

  confirmReservation() {

  }
}
