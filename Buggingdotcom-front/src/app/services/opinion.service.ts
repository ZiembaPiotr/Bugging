import { Injectable } from '@angular/core';
import {Hotel} from "../interfaces/hotel";
import {Observable} from "rxjs";
import {Opinion} from "../interfaces/opinion";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  private getOpinionsUrl:string = "https://s307243.labagh.pl/opinions";
  private addOpinionUrl:string = "https://s307243.labagh.pl/opinions/add-new";

  constructor(private http:HttpClient) { }

  getOpinionsForHotel(hotel:Hotel):Observable<Opinion[]> {
    const url = `${this.getOpinionsUrl}/${hotel.hotel_id}`;
    return this.http.get<Opinion[]>(url);
  }

  getOpinionsForId(id:number):Observable<Opinion[]> {
    const url = `${this.getOpinionsUrl}/${id}`;
    return this.http.get<Opinion[]>(url);
  }

  addOpinion(opinion:Opinion):Observable<Opinion> {
    return this.http.post<Opinion>(this.addOpinionUrl, opinion, httpOptions);
  }
}
