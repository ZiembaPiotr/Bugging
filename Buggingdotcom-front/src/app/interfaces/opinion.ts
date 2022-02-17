export interface Opinion {
  id?: number;
  reservation_id?: number;
  hotel_id: number;
  email: string;
  rate: number;
  opinion: string;
  createdOn?: string;
}
