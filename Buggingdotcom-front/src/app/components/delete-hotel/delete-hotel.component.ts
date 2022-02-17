import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent implements OnInit {

  @Output() onDelete:EventEmitter<number> = new EventEmitter<number>();

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  deleteButton() {
    this.onDelete.emit(this.loginService.currentAdminUser.hotel_id);
  }
}
