export interface Reservation {
  id: number;
  hotelID: number;
  roomID: number;
  guestID: number;
  checkInDate: string;
  checkOutDate: string;
  opinionID?: number;
  mark: number;
  createdOn: string;
}
