import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../../interfaces/guest";
import {LoginService} from "../../services/login.service";
import {first, Observable} from "rxjs";
import {AdminLoginAttempt, HotelAdmin} from "../../interfaces/hotel-admin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<GuestLoginAttempt> = new EventEmitter();
  email: string;
  password: string;
  profile: HotelAdmin;
  submitted: boolean = false;
  loading: boolean = false;
  loginForm: FormGroup;

  constructor(private loginService:LoginService,
              private router:Router,
              private loginBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.loginService.currentGuestUser !== undefined) {
      this.router.navigate(['/profile']).then();
    }

    this.loginForm = this.loginBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const guestLoginAttempt: GuestLoginAttempt = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      is_admin: false
    }

    this.loading = true;
    this.loginService.getGuest(guestLoginAttempt)
      .pipe(first())
      .subscribe(
        data => {
          this.loginService.currentGuestUser = {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            phone_no: data.phone_no,
            email: data.email,
            password: data.password,
            is_admin: false
          };
          this.router.navigate([`profile`]).then();
        }
      );
  }
}
