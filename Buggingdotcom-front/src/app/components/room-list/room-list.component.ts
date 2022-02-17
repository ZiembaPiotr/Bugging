import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() rooms:Room[];
  arrayIter:number[];

  constructor() { }

  ngOnInit(): void {
    const len = this.rooms.length;
    console.log(len);
    this.arrayIter = Array(len).fill(1);
  }

  getNumberOfRooms(): number[] {
    return Array(this.rooms.length).fill(1);
  }
}
