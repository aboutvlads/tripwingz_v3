export interface FlightDeal {
  id: string;
  destination: string;
  image: string;
  discount: string;
  price: string;
  originalPrice: string;
  date: string;
  stops: string;
  from: string;
  class: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  baggage: string;
  amenities: string[];
  postedAt: string;
  dealFinder: {
    name: string;
    bio: string;
    avatar: string;
    deals: number;
  };
}

export interface Airport {
  code: string;
  city: string;
  country: string;
}