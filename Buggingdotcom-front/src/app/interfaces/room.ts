import {Hotel} from "./hotel";

export interface Room {
  id: number;
  hotelID: number;
  hotel?: Hotel;
  capacity: number;
  photos: string;
  price: number;
}
