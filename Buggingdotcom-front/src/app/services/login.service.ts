import {Injectable} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../interfaces/guest";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdminLoginAttempt, HotelAdmin} from "../interfaces/hotel-admin";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentGuestUser:Guest;
  public currentAdminUser:HotelAdmin;

  private apiRegisterUrl:string = "https://s307243.labagh.pl/authentication/registration";
  private apiGuestUrl:string = "https://s307243.labagh.pl/authentication/log-in-guest";
  private apiAdminUrl:string = "https://s307243.labagh.pl/authentication/log-in-admin";

  constructor(private http:HttpClient) { }

  getGuest(loginAttempt:GuestLoginAttempt):Observable<Guest> {
    return this.http.post<Guest>(this.apiGuestUrl, loginAttempt);
  }

  getAdmin(loginAttempt:AdminLoginAttempt):Observable<HotelAdmin> {
    return this.http.post<HotelAdmin>(this.apiAdminUrl, loginAttempt, httpOptions);
  }

  addGuest(guest:Guest):Observable<Guest> {
    return this.http.post<Guest>(this.apiRegisterUrl, guest, httpOptions)
  }

  addAdmin(admin:HotelAdmin):Observable<HotelAdmin> {
    return this.http.post<HotelAdmin>(this.apiRegisterUrl, admin, httpOptions);
  }

  isUserLogged():Observable<boolean> {
    return Observable.create(this.currentGuestUser !== undefined || this.currentAdminUser !== undefined);
  }

}
