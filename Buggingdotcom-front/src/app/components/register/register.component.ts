import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../../interfaces/guest";
import {first, Observable} from "rxjs";
import {LoginService} from "../../services/login.service";
import {HotelAdmin} from "../../interfaces/hotel-admin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onLogin: EventEmitter<GuestLoginAttempt> = new EventEmitter();
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  password: string;
  passwordRpt: string;
  selected: number = -1;

  logSuccessful:boolean = false;

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.selected === 1) {
      const guest:Guest = {
        email: this.email,
        first_name: this.firstname,
        last_name: this.lastname,
        phone_no: this.phoneNumber,
        password: this.password,
        is_admin: false
      };
      this.loginService.addGuest(guest)
        .pipe(first())
        .subscribe({
          next: () => {
            alert("Registration successful!");
            this.router.navigate(['/loginGuest']).then();
          },
          error: error => {
            alert("Registration successful!");
            this.router.navigate(['/loginGuest']).then();
          }
        });
    } else if (this.selected === 2){
      const admin:HotelAdmin = {
        email: this.email,
        hotel_id: -1,
        first_name: this.firstname,
        last_name: this.lastname,
        phone_no: this.phoneNumber,
        password: this.password,
        is_admin: true
      };
      this.loginService.addAdmin(admin)
        .pipe(first())
        .subscribe({
          next: () => {
            alert("Registration successful!");
            this.router.navigate(['/loginAdmin']).then();
          },
          error: error => {
            alert("Registration successful!");
            this.router.navigate(['/loginAdmin']).then();
          }

        });
    }
  }
}
