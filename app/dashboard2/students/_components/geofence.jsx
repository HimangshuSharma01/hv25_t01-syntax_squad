"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 26.76985,
  lng: 88.37584,
};

const radius = 30000;

export default function Geofence({ onMarkAttendance }) {
  const [location, setLocation] = useState(null);
  const [insideGeofence, setInsideGeofence] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setLocation({ lat: userLat, lng: userLng });

        const distance = getDistance(userLat, userLng, center.lat, center.lng);
        setInsideGeofence(distance <= radius);
      });
    }
  }, []);

  function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {location && <Marker position={location} />}
      </GoogleMap>

      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">
          Your Location:{" "}
          {location ? `${location.lat}, ${location.lng}` : "Fetching..."}
        </h2>
        {insideGeofence ? (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
            onClick={onMarkAttendance}
          >
            Mark Attendance
          </button>
        ) : (
          <p className="text-red-500 mt-3">You are outside the allowed area</p>
        )}
      </div>
    </LoadScript>
  );
}
