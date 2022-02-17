import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../interfaces/room";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl:string = "https://s307243.labagh.pl/hotel-details/hotel"

  constructor(private http:HttpClient) { }

  getRoomsForId(id:number):Observable<Room[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Room[]>(url);
  }
}
