import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations";

export const LocationList = () => {
  const { locations } = useLocations();
  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="location"
          title={location.name}
          content={
            <CharacterList
              ids={location.residents.map((resident) => {
                const id = resident.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
