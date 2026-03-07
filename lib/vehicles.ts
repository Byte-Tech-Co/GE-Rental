export type VehicleCategory = "Car" | "Bike" | "Scooty" | "SUV";
export type VehicleStatus = "Available" | "Booked";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  price: number;
  image: string;
  status: VehicleStatus;
  seats: number;
  fuel: string;
  features: string[];
}

export const categories: VehicleCategory[] = ["Car", "Bike", "Scooty", "SUV"];

export const vehicles: Vehicle[] = [
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    category: "Car",
    price: 1200,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 5,
    fuel: "Petrol",
    features: ["AC", "Power Steering", "Bluetooth"],
  },
  {
    id: "hyundai-i20",
    name: "Hyundai i20",
    category: "Car",
    price: 1400,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 5,
    fuel: "Petrol",
    features: ["AC", "Sunroof", "Touchscreen"],
  },
  {
    id: "maruti-alto",
    name: "Maruti Alto 800",
    category: "Car",
    price: 800,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 4,
    fuel: "Petrol",
    features: ["AC", "Power Windows"],
  },
  {
    id: "honda-city",
    name: "Honda City",
    category: "Car",
    price: 1800,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    status: "Booked",
    seats: 5,
    fuel: "Petrol",
    features: ["AC", "Cruise Control", "Leather Seats"],
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    price: 2500,
    image: "/images/vehicles/toyota-innova.png",
    status: "Available",
    seats: 7,
    fuel: "Diesel",
    features: ["AC", "Captain Seats", "Rear AC"],
  },
  {
    id: "mahindra-thar",
    name: "Mahindra Thar",
    category: "SUV",
    price: 3000,
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 4,
    fuel: "Diesel",
    features: ["4x4", "Convertible Top", "Off-Road"],
  },
  {
    id: "hyundai-creta",
    name: "Hyundai Creta",
    category: "SUV",
    price: 2200,
    image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 5,
    fuel: "Diesel",
    features: ["AC", "Panoramic Sunroof", "ADAS"],
  },
  {
    id: "royal-enfield-classic",
    name: "Royal Enfield Classic 350",
    category: "Bike",
    price: 650,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 2,
    fuel: "Petrol",
    features: ["ABS", "Retro Style"],
  },
  {
    id: "re-himalayan",
    name: "Royal Enfield Himalayan",
    category: "Bike",
    price: 900,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 2,
    fuel: "Petrol",
    features: ["ABS", "Adventure Tourer", "Tripper Navigation"],
  },
  {
    id: "ktm-duke-200",
    name: "KTM Duke 200",
    category: "Bike",
    price: 750,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=600",
    status: "Booked",
    seats: 2,
    fuel: "Petrol",
    features: ["ABS", "Sport Mode"],
  },
  {
    id: "honda-activa",
    name: "Honda Activa 6G",
    category: "Scooty",
    price: 300,
    image: "/images/vehicles/activa-6g.png",
    status: "Available",
    seats: 2,
    fuel: "Petrol",
    features: ["Combi Brake", "LED Headlamp"],
  },
  {
    id: "tvs-jupiter",
    name: "TVS Jupiter 125",
    category: "Scooty",
    price: 350,
    image: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80&w=600",
    status: "Available",
    seats: 2,
    fuel: "Petrol",
    features: ["Disc Brake", "USB Charging"],
  },
];

export const PRICE_MIN = 0;
export const PRICE_MAX = 3500;
