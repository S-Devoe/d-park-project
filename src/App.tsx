import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFirebaseSubscription from "./hook/useFirebaseSubscription";
import { SlotStatus } from "./type";
import ParkingSlots from "./page-content/ParkingSlots";

export interface SlotI {
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

  const [slots, setSlots] = useState<SlotI[]>([
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
      <ParkingSlots slots={slots} />
    </section>
  );
}

export default App;
