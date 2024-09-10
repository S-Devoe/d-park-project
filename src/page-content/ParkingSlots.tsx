import { SlotI } from "../App";
import { CarSvg } from "../components/svg/CarSvg";
import { SlotStatus } from "../type";

interface Props {
  slots: SlotI[];
}

const ParkingSlots = ({ slots }: Props) => {
  return (
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
          >
            {slot.id}
            <ParkingStatus status={slot.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSlots;

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
