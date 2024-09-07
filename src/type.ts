export type SlotStatus = "obstruction" | "occupied" | "free";

interface Slot {
  status: SlotStatus;
}

export interface ParkingData {
  [key: string]: Slot;
}

export interface FirebaseSlot {
  status: SlotStatus;
}
