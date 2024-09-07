import { useEffect, useRef, useState } from "react";
import "./App.css";
import { CarSvg } from "./components/svg/CarSvg";
import useFirebaseSubscription from "./hook/useFirebaseSubscription";
import { SlotStatus } from "./type";

interface Slot {
  id: string;
  status: SlotStatus;
}

function App() {
  const { data, subscribe } = useFirebaseSubscription("parking");

  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Set up subscription when component mounts
    const cleanup = subscribe();
    unsubscribeRef.current = cleanup;

    // Clean up subscription when component unmounts
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [subscribe]);

  const [slots, setSlots] = useState<Slot[]>([
    { id: "A1", status: "free" },
    { id: "A2", status: "free" },
    { id: "A3", status: "free" },
    { id: "A4", status: "free" },
    { id: "B1", status: "free" },
    { id: "B2", status: "free" },
    { id: "B3", status: "free" },
    { id: "B4", status: "free" },
    { id: "C1", status: "free" },
    { id: "C2", status: "free" },
    { id: "C3", status: "free" },
    { id: "C4", status: "free" },
    { id: "D1", status: "free" },
    { id: "D2", status: "free" },
    { id: "D3", status: "free" },
    { id: "D4", status: "free" },
  ]);

  useEffect(() => {
    if (data) {
      setSlots((prevSlots) =>
        prevSlots.map((slot) => {
          let newStatus: SlotStatus = "free"; // Default status

          // Map Firebase data to slot IDs
          if (slot.id === "A1" && data.slot1) {
            newStatus = data.slot1.status;
          } else if (slot.id === "B2" && data.slot2) {
            newStatus = data.slot2.status;
          }

          return { ...slot, status: newStatus };
        })
      );
    }
  }, [data]);

  return (
    <section className="text-black grid place-content-center">
      <div className="relative h-fit w-fit p-12 border-2 border-black gap-20 flex flex-col items-center">
        {/* entry */}
        <div className="absolute right-[-0.5rem] top-[8rem] flex items-center justify-center w-5 h-20 bg-white text-black font-bold text-lg">
          <span className="rotate-90 transform font-medium tracking-wide text-sm ">
            Entry
          </span>
        </div>
        {/* exit  */}
        <div className="absolute right-[-0.5rem] bottom-[8rem] flex items-center justify-center w-5 h-20 bg-white text-black font-bold text-lg">
          <span className="-rotate-90 transform font-medium tracking-wide text-sm ">
            Exit
          </span>
        </div>
        <div className="flex items-center">
          {slots.slice(0, 4).map((slot) => (
            <div
              key={slot.id}
              className={`relative text-xs border-r-2 border-black park_space flex items-center justify-center first:border-l-2`}
              tabIndex={0}
            >
              {slot.id}
              <ParkingStatus status={slot.status} />
            </div>
          ))}
        </div>
        <div className="">
          <div className="flex items-center">
            {slots.slice(4, 8).map((slot) => (
              <div
                key={slot.id}
                className={`relative text-xs border-r-2 border-black park_space flex items-center justify-center first:border-l-2`}
                tabIndex={0}
              >
                {slot.id}
                <ParkingStatus status={slot.status} />
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {slots.slice(8, 12).map((slot) => (
              <div
                key={slot.id}
                className={`relative  text-xs border-r-2 border-black park_space flex items-center justify-center first:border-l-2 border-t-2`}
                tabIndex={0}
              >
                {slot.id}
                <ParkingStatus status={slot.status} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {slots.slice(12, 16).map((slot) => (
            <div
              key={slot.id}
              className={`relative  text-xs border-r-2 border-black park_space flex items-center justify-center first:border-l-2`}
              tabIndex={0}
            >
              {slot.id}
              <ParkingStatus status={slot.status} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;

const ParkingStatus = ({ status }: { status: SlotStatus }) => {
  return (
    <span className="z-[4] absolute">
      {status === "occupied" && <CarSvg className="car_size" />}
      {status === "obstruction" && (
        <img
          src="./person.png"
          alt="obstruction"
          className="w-[4rem] h-[2.5rem]"
        />
      )}
    </span>
  );
};
