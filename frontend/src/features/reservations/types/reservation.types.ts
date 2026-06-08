export interface Reservation {
    id: string | number;
    car_id: number;
    car_name?: string;
    car_image?: string;
    start_date: string;
    end_date: string;
    total_price?: number;
    status: 'Confirmed' | 'Canceled' | 'Pending';
    customer_name: string;
    customer_email: string;
    customer_phone: string;
  }