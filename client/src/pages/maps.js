import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerImage from "../assets/images/marker.png";

export default function Maps() {
  const ICON = new Icon({
    iconUrl: markerImage,
    iconSize: [32, 45],
  });
  return (
    <>
      <MapContainer
        center={[51.762718, -0.224710]}
        zoom={13}
        scrollwheelzoom={false}
        style={{
          height: "650px",
          backgroundcolor: "red",
          margintop: "80px",
          marginbottom: "90px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ICON} position={[51.762718, -0.224710]}>
          <Popup>Man information</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
