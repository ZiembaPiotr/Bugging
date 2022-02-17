import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Hotel} from "../../interfaces/hotel";
import {HotelsService} from "../../services/hotels.service";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  name: string;
  country: string;
  city: string;
  address: string;
  stars: number;
  adminId?: number;

  constructor(private loginService:LoginService,
              private hotelService:HotelsService,
              private router:Router) { }

  ngOnInit(): void {
    this.adminId = this.loginService.currentAdminUser.id;
  }

  onSubmit() {
    const newHotel:Hotel = {
      admin_id: this.adminId,
      name: this.name,
      country: this.country,
      city: this.city,
      address: this.address,
      stars: this.stars
    }
    this.hotelService.addHotel(newHotel)
      .pipe(first())
      .subscribe({
          next: () => {
            alert("Hotel added successfully");
            this.router.navigate(['/profile']).then()
          },
          error: error => {
            alert("There was an error while adding your hotel :-(");
          }
        }
      );
  }
}
