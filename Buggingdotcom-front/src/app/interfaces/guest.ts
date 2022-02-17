export interface Guest {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_no: number;
  password: string;
  is_admin: boolean;
}

export interface GuestLoginAttempt {
  email: string;
  password: string;
  is_admin: boolean;
}
