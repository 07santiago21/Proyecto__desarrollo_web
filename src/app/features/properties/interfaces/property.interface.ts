export interface Property{
    property_id: number;
    user_id: number;
    title: string;
    description: string;
    address: string;
    price_per_night: number;
    rooms: number;
    bathrooms: number;
    max_capacity: number;
    photos: string;
    latitude: string; // quitar en form
    longitude: string; // ...

}