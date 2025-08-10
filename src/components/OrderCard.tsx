import { CalendarDays, MapPinHouse, SquarePen } from "lucide-react";
import clsx from "clsx";
import { Form } from "./Form/EditForm/Form";
import { useState } from "react";

interface OrderProps {
  id: string;
  address: string;
  title: string;
  description: string;
  date: string;
}

export function OrderCard({
  id,
  address,
  date,
  description,
  title,
}: OrderProps) {
  const [editMode, setEditMode] = useState(false);

  function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString);

    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const brazilOffset = -3 * 60;
    const brazilDate = new Date(utc + brazilOffset * 60000);

    const day = brazilDate.getDate().toString().padStart(2, "0");
    const month = (brazilDate.getMonth() + 1).toString().padStart(2, "0");
    const year = brazilDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="text-[#030637] p-4 flex justify-between border-b border-purple-300 gap-4">
      <div className="w-full">
        {editMode ? (
          <Form id={id} />
        ) : (
          <>
            <div
              className={clsx(
                "flex items-center gap-4 mb-4 text-xs transition-all"
              )}
            >
              <div className="text-purple-500  font-semibold flex items-center gap-1 ">
                <CalendarDays className="size-4" /> {formatDate(date)}
              </div>
              <div className="flex items-center gap-1 text-[#3c0753] font-semibold ">
                <MapPinHouse className="size-4" color="#3c0753" />
                <p>{address}</p>
              </div>
            </div>
            <h2 className="font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
          </>
        )}
      </div>
      <button
        className={clsx(
          "p-1 rounded-md h-fit cursor-pointer hover:bg-[#720455] hover:text-white transition-colors duration-300",
          editMode ? "bg-[#720455] text-white " : "bg-purple-200"
        )}
        onClick={() => setEditMode(!editMode)}
      >
        <SquarePen className="size-6" />
      </button>
    </div>
  );
}
