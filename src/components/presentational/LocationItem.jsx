import { useMemo, useState } from "react";
import { LocationList } from "./LocationList";

export const LocationItem = ({ location }) => {
  const [open, setOpen] = useState(false);

  const ids = useMemo(
    () =>
      location.residents.map((resident) => {
        const id = resident.split("/").pop();
        return id;
      }),
    [location?.residents]
  );

  return (
    <div className="location" onClick={() => setOpen(true)}>
      <h3>{location.name}</h3>
      {open && <LocationList ids={ids} />}
    </div>
  );
};
