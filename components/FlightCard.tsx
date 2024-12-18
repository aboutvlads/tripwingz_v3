"use client";

import { Card } from "@/components/ui/card";
import { FlightDeal } from "@/types/flight";
import { FlightDialog } from "@/components/FlightDialog";
import { useState } from "react";

interface FlightCardProps {
  deal: FlightDeal;
}

export function FlightCard({ deal }: FlightCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative h-48">
          <img
            src={deal.image}
            alt={deal.destination}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-white text-gray-800">
              {deal.class}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
              {deal.discount}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">{deal.destination}</h3>
            <span className="text-xs text-gray-500">{deal.postedAt}</span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <p>{deal.date} · {deal.stops}</p>
            <p>From {deal.from}</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-xl font-bold text-gray-900">{deal.price}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">{deal.originalPrice}</span>
          </div>
        </div>
      </Card>
      <FlightDialog 
        deal={deal} 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
}