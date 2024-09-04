import { useState } from "react";

import "./App.css";
import { CarSvg } from "./components/svg/CarSvg";

function App() {
  const [slots, setSlots] = useState([
    { id: "A1", occupied: false },
    { id: "A2", occupied: false },
    { id: "A3", occupied: false },
    { id: "A4", occupied: false },
    { id: "B1", occupied: false },
    { id: "B2", occupied: false },
    { id: "B3", occupied: false },
    { id: "B4", occupied: false },
    { id: "C1", occupied: false },
    { id: "C2", occupied: false },
    { id: "C3", occupied: false },
    { id: "C4", occupied: false },
    { id: "D1", occupied: false },
    { id: "D2", occupied: false },
    { id: "D3", occupied: false },
    { id: "D4", occupied: false },
  ]);

  const toggleSlot = (id: string) => {
    setSlots(
      slots.map((slot) => {
        if (slot.id === id) {
          return { ...slot, occupied: !slot.occupied };
        }
        return slot;
      })
    );
  };

  return (
    <section className="text-black space-y-24 flex flex-col items-center">
      <div className="flex items-center">
        {slots.slice(0, 4).map((slot) => (
          <button
            key={slot.id}
            className={`relative parking-slot ${
              slot.occupied ? "occupied" : "free"
            } border-r-2 border-black park-space flex items-center justify-center first:border-l-2 `}
            onClick={() => toggleSlot(slot.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleSlot(slot.id);
              }
            }}
            tabIndex={0}
          >
            {slot.id}
            <span className="z-[4] absolute">
              {slot.occupied && <CarSvg className="h-[5.5rem] w-[3rem] " />}
            </span>
          </button>
        ))}
      </div>
      <div className="">
        <div className="flex items-center">
          {slots.slice(4, 8).map((slot) => (
            <button
              key={slot.id}
              className={`relative parking-slot ${
                slot.occupied ? "occupied" : "free"
              } border-r-2 border-black park-space flex items-center justify-center first:border-l-2 `}
              onClick={() => toggleSlot(slot.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSlot(slot.id);
                }
              }}
              tabIndex={0}
            >
              {slot.id}
              <span className="z-[4] absolute">
                {slot.occupied && <CarSvg className="h-[5.5rem] w-[3rem] " />}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center">
          {slots.slice(8, 12).map((slot) => (
            <button
              key={slot.id}
              className={`relative parking-slot ${
                slot.occupied ? "occupied" : "free"
              } border-r-2 border-black park-space flex items-center justify-center first:border-l-2 border-t-2 `}
              onClick={() => toggleSlot(slot.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSlot(slot.id);
                }
              }}
              tabIndex={0}
            >
              {slot.id}
              <span className="z-[4] absolute">
                {slot.occupied && <CarSvg className="h-[5.5rem] w-[3rem] " />}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        {slots.slice(12, 16).map((slot) => (
          <button
            key={slot.id}
            className={`relative parking-slot ${
              slot.occupied ? "occupied" : "free"
            } border-r-2 border-black park-space flex items-center justify-center first:border-l-2 `}
            onClick={() => toggleSlot(slot.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleSlot(slot.id);
              }
            }}
            tabIndex={0}
          >
            {slot.id}
            <span className="z-[4] absolute">
              {slot.occupied && <CarSvg className="h-[5.5rem] w-[3rem] " />}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default App;
