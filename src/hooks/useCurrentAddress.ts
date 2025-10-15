import { env } from "@/constants/env";
import React from "react";
import { toast } from "sonner";

type Coordinates = {
  latitude: number;
  longitude: number;
}

type UserCurrentAddressReturn = {
  coordinates: Coordinates | null;
  address: string | null;
  loading: boolean;
  requestLocation: () => Promise<void>;
}

export const useCurrentAddress = (): UserCurrentAddressReturn => {
  const [coordinates, setCoordinates] = React.useState<Coordinates | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);


  const requestLocation = React.useCallback(async () => {
    setLoading(true);

    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        const currentCoordinates = { latitude, longitude }
        setCoordinates(currentCoordinates)
        getAddressFromCoordinates(currentCoordinates)
      },
      (err) => {
        toast.error(err.message);
        setLoading(false)
      }
    )
  }, [])

  const getAddressFromCoordinates = async (coordinates: Coordinates) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${env.GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        setAddress(data.results[7].formatted_address);
      } else {
        toast.error("Failed to fetch address");
      }
    } catch (e) {
      console.warn(e);
      toast.error("Failed to fetch address");
    } finally {
      setLoading(false);
    }
  }


  React.useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((perm) => {
        if (perm.state === "granted") {
          requestLocation();
        } else if (perm.state === "prompt") {
          requestLocation();
        } else if (perm.state === "denied") {
          toast.info("Location access denied. Please enable it manually in your browser settings.")
        }
      });
    } else {
      requestLocation();
    }
  }, [requestLocation]);


  return {
    coordinates,
    address,
    loading,
    requestLocation
  }
}