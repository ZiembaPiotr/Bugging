import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hotel} from "../interfaces/hotel";
import {Observable} from "rxjs";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private apiUrl:string = "https://s307243.labagh.pl/hotel-details";
  private apiGetOneUrl:string = "https://s307243.labagh.pl/hotel-details/hotel"
  private apiDeleteOneUrl:string = "https://s307243.labagh.pl/hotel-details/hotel"
  private apiAddHotel:string = "https://s307243.labagh.pl/admins/add-hotel";

  constructor(private http:HttpClient) { }

  getHotels():Observable<Hotel[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Hotel[]>(url);
  }

  getHotelById(hotelId:number):Observable<Hotel[]> {
    const url = `${this.apiUrl}/${hotelId}`;
    return this.http.get<Hotel[]>(url);
  }

  getHotelByHotel(hotel:Hotel):Observable<Hotel> {
    const url = `${this.apiUrl}/${hotel.hotel_id}`;
    return this.http.get<Hotel>(url);
  }

  addHotel(hotel:Hotel):Observable<Hotel> {
    return this.http.post<Hotel>(this.apiAddHotel, hotel, httpOptions);
  }

  deleteHotel(hotelId:number):Observable<Hotel> {
    const url = `${this.apiDeleteOneUrl}/${hotelId}`;
    return this.http.delete<Hotel>(url);
  }
}
