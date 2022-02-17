export interface HotelAdmin {
  id?: number;
  first_name: string;
  last_name: string;
  phone_no: number;
  email: string;
  password: string;
  created_on?: string;
  last_modify_on?: string;
  last_login_ip?: string;
  hotel_id: number;
  is_admin: boolean;
}

export interface AdminLoginAttempt {
  email: string;
  password: string;
  is_admin: boolean;
}
