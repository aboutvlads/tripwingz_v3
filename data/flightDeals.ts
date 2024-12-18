import { FlightDeal } from "@/types/flight";

const dealFinder = {
  name: "Lousson",
  bio: "Hey I'm Lousson. I love travel, my family, a good meal, and a good deal!",
  avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
  deals: 127
};

const cityImages = {
  "Porto": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
  "Paris": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  "Amsterdam": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
  "Rome": "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
  "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded",
  "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  "Munich": "https://images.unsplash.com/photo-1595867818082-083862f3d630",
  "Vienna": "https://images.unsplash.com/photo-1516550893923-42d28e5677af",
  "Copenhagen": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
  "Lisbon": "https://images.unsplash.com/photo-1588535684923-900727736ac0"
};

export const flightDeals: FlightDeal[] = [
  {
    id: "porto-1",
    destination: "Porto, Portugal",
    image: cityImages.Porto,
    discount: "63% off",
    price: "€299",
    originalPrice: "€799",
    date: "Feb",
    stops: "1 stop",
    from: "CDG, Paris",
    class: "Economy",
    airline: "TAP Air Portugal",
    departureTime: "10:30 AM",
    arrivalTime: "8:45 PM",
    duration: "12h 15m",
    baggage: "23 kg",
    amenities: ["Wi-Fi", "In-flight Meals", "Entertainment"],
    postedAt: "2 hours ago",
    dealFinder
  },
].concat([
  "Paris, France",
  "Amsterdam, Netherlands",
  "Rome, Italy",
  "Barcelona, Spain",
  "London, UK",
  "Munich, Germany",
  "Vienna, Austria",
  "Copenhagen, Denmark",
  "Lisbon, Portugal"
].map((city, index) => {
  const cityName = city.split(',')[0];
  const basePrice = 200 + Math.floor(Math.random() * 300);
  const discount = 40 + Math.floor(Math.random() * 30);
  const originalPrice = Math.floor(basePrice * (100 / (100 - discount)));
  
  return {
    id: `city-${index + 1}`,
    destination: city,
    image: cityImages[cityName as keyof typeof cityImages],
    discount: `${discount}% off`,
    price: `€${basePrice}`,
    originalPrice: `€${originalPrice}`,
    date: ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug"][Math.floor(Math.random() * 4)],
    stops: Math.random() > 0.5 ? "1 stop" : "Non stop",
    from: ["CDG, Paris", "AMS, Amsterdam", "FRA, Frankfurt"][Math.floor(Math.random() * 3)],
    class: Math.random() > 0.2 ? "Economy" : "Business",
    airline: ["Lufthansa", "Air France", "KLM", "British Airways"][Math.floor(Math.random() * 4)],
    departureTime: `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    arrivalTime: `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    duration: `${2 + Math.floor(Math.random() * 4)}h ${Math.floor(Math.random() * 60)}m`,
    baggage: `${20 + Math.floor(Math.random() * 15)} kg`,
    amenities: ["Wi-Fi", "In-flight Meals", "Entertainment", "USB Power"].slice(0, 2 + Math.floor(Math.random() * 3)),
    postedAt: `${Math.floor(Math.random() * 24)} hours ago`,
    dealFinder
  };
}));