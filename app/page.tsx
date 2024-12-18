import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { FlightCard } from "@/components/FlightCard";
import { SuggestDealSection } from "@/components/SuggestDealSection";
import { flightDeals } from "@/data/flightDeals";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightDeals.map((deal) => (
            <FlightCard key={deal.id} deal={deal} />
          ))}
        </div>
        <SuggestDealSection />
      </div>
    </main>
  );
}