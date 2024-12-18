"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plane, Clock, Briefcase, Wifi, Coffee, Tv, Usb, X } from "lucide-react";
import { FlightDeal } from "@/types/flight";
import { DealFinder } from "@/components/flight/DealFinder";

interface FlightDialogProps {
  deal: FlightDeal;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const amenityIcons: Record<string, any> = {
  "Wi-Fi": Wifi,
  "In-flight Meals": Coffee,
  "Entertainment": Tv,
  "USB Power": Usb,
};

export function FlightDialog({ deal, open, onOpenChange }: FlightDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{deal.destination}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
            <img
              src={deal.image}
              alt={deal.destination}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                {deal.discount}
              </span>
            </div>
          </div>

          <DealFinder {...deal.dealFinder} />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">{deal.airline}</p>
              <p className="text-sm text-gray-500">{deal.class}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-2xl font-bold text-gray-900">{deal.price}</p>
              <p className="text-sm text-gray-500 line-through">{deal.originalPrice}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Plane className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{deal.stops}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{deal.duration}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{deal.baggage}</span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{deal.departureTime}</p>
                <p className="text-sm text-gray-500">{deal.from}</p>
              </div>
              <Plane className="h-5 w-5 text-gray-400 transform rotate-90" />
              <div className="text-right">
                <p className="font-semibold">{deal.arrivalTime}</p>
                <p className="text-sm text-gray-500">{deal.destination}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Amenities</p>
            <div className="flex flex-wrap gap-2">
              {deal.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity] || Coffee;
                return (
                  <div
                    key={amenity}
                    className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-sm"
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {amenity}
                  </div>
                );
              })}
            </div>
          </div>

          <Button className="w-full" size="lg">
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}