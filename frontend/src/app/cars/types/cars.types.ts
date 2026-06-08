

export interface Car {
    id:  number;
    brand: string;       // Ej: "BMW"
    model: string;       // Ej: "Serie 3"
    price_per_day: number; // Ej: 1200
    // Aquí puedes agregar más propiedades después si tu backend las manda
    image?: string;
    year?: number;
}