export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price_per_day: number;
  transmission: "manual" | "Automatico";
  fuel_type: string;
  is_available: boolean;
  image_url: string | null;
  car_type: string | null;
}

export interface CreateCarInput extends Omit<Car, "id"> {}

export interface UpdateCarInput extends Partial<CreateCarInput> {
  id: number;
}

export interface CarFilters {
  brand?: string;
  transmission?: "manual" | "Automatico";
  max_price?: number;
}
