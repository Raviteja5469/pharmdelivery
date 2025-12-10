import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle
} from "react-leaflet";
import { DivIcon } from "leaflet";
import { motion } from "framer-motion";

// Coordinates
const HYDERABAD = [17.385, 78.4867];
const BENGALURU = [12.9716, 77.5946];
const CENTER_VIEW = [15.1, 78.0];

// Generate mock drones
const generateDrones = (center, count, prefix) =>
  Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}-${i + 100}`,
    pos: [
      center[0] + (Math.random() - 0.5) * 0.2,
      center[1] + (Math.random() - 0.5) * 0.2
    ],
    status: Math.random() > 0.3 ? "In Transit" : "Hovering",
    eta: Math.floor(Math.random() * 20) + 5
  }));

const activeDrones = [
  ...generateDrones(HYDERABAD, 8, "HYD"),
  ...generateDrones(BENGALURU, 8, "BLR")
];

// Fire Blue Pulse Icon
const createFireBlueIcon = () =>
  new DivIcon({
    className: "custom-div-icon",
    html: `
        <div class="relative flex items-center justify-center w-6 h-6 group">
          <span class="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-600 border-2 border-white shadow-lg"></span>
        </div>
      `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

// Hub Icon
const createHubIcon = () =>
  new DivIcon({
    className: "hub-icon",
    html: `
      <div class="relative flex items-center justify-center w-8 h-8">
        <span class="absolute h-full w-full rounded-full bg-electric-teal opacity-20 animate-pulse"></span>
        <div class="relative flex items-center justify-center w-6 h-6 bg-clinical-900 rounded-full border-2 border-electric-teal text-white font-bold text-[10px]">H</div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

export const SkyGridMap = () => {
  return (
    <section className="py-16 md:py-24 bg-clinical-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Live Operations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3"
          >
            Live Network Grid
          </motion.h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-xl sm:max-w-2xl mx-auto">
            Monitoring{" "}
            <span className="text-electric-teal font-bold">
              {activeDrones.length} active units
            </span>{" "}
            across the southern corridor.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] bg-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden border-[6px] sm:border-[8px] border-white shadow-xl ring-1 ring-slate-900/5">
          <MapContainer
            center={CENTER_VIEW}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {/* Hyderabad */}
            <Circle
              center={HYDERABAD}
              pathOptions={{
                fillColor: "#2dd4bf",
                color: "#0d9488",
                fillOpacity: 0.1,
                weight: 1,
                dashArray: "5,10"
              }}
              radius={25000}
            />
            <Marker position={HYDERABAD} icon={createHubIcon()}>
              <Popup>
                <div className="font-sans font-bold text-slate-900">
                  HYDERABAD HUB
                </div>
                <div className="text-xs text-slate-500">
                  Main Distribution Center
                </div>
              </Popup>
            </Marker>

            {/* Bengaluru */}
            <Circle
              center={BENGALURU}
              pathOptions={{
                fillColor: "#2dd4bf",
                color: "#0d9488",
                fillOpacity: 0.1,
                weight: 1,
                dashArray: "5,10"
              }}
              radius={25000}
            />
            <Marker position={BENGALURU} icon={createHubIcon()}>
              <Popup>
                <div className="font-sans font-bold text-slate-900">
                  BENGALURU HUB
                </div>
                <div className="text-xs text-slate-500">South Tech Hub</div>
              </Popup>
            </Marker>

            {/* Drones */}
            {activeDrones.map((drone) => (
              <Marker
                key={drone.id}
                position={drone.pos}
                icon={createFireBlueIcon()}
              >
                <Popup className="font-mono text-xs">
                  <div className="p-2 min-w-[130px] sm:min-w-[140px]">
                    <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-900">
                        {drone.id}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div className="flex justify-between text-slate-600 mb-1">
                      <span>Status:</span>
                      <span className="font-medium text-slate-800">
                        {drone.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">ETA:</span>
                      <span className="text-white text-[10px] font-bold bg-blue-600 px-2 py-0.5 rounded-full">
                        {drone.eta} min
                      </span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Desktop-only Stats Overlay */}
          <div className="hidden md:block absolute bottom-6 right-6 z-[400] bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 w-72">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Traffic Density
              </h4>
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-slate-700">Hyderabad</span>
                  <span className="text-electric-teal font-bold">High Load</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-electric-teal w-[85%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-slate-700">Bengaluru</span>
                  <span className="text-blue-500 font-bold">Moderate</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[60%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
