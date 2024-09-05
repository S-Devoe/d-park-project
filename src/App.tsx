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
    <section className="text-black grid place-content-center">
      <div className="relative h-fit w-fit p-12 border-2 border-black gap-24 flex flex-col items-center">
        {/* entry */}
        <div className="absolute right-[-0.5rem] top-[9rem] flex items-center justify-center w-5 h-24 bg-white text-black font-bold text-lg">
          <span className="rotate-90 transform tracking-widest text-sm ">
            Entry
          </span>
        </div>
        {/* exit  */}
        <div className="absolute left-[-0.5rem] bottom-[9rem] flex items-center justify-center w-5 h-24 bg-white text-black font-bold text-lg">
          <span className="-rotate-90 transform tracking-widest text-sm ">
            Exit
          </span>
        </div>
        <div className="flex items-center">
          {slots.slice(0, 4).map((slot) => (
            <button
              key={slot.id}
              className={`relative parking-slot ${
                slot.occupied ? "occupied" : "free"
              } border-r-2 border-black park_space flex items-center justify-center first:border-l-2`}
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
                {slot.occupied && <CarSvg className="car_size" />}
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
                } border-r-2 border-black park_space flex items-center justify-center first:border-l-2`}
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
                  {slot.occupied && <CarSvg className="car_size" />}
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
                } border-r-2 border-black park_space flex items-center justify-center first:border-l-2 border-t-2 `}
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
                  {slot.occupied && <CarSvg className="car_size" />}
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
              } border-r-2 border-black park_space flex items-center justify-center first:border-l-2 `}
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
                {slot.occupied && <CarSvg className="car_size" />}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
