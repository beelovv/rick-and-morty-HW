import { LocationList } from "./LocationList";
import { EpisodeList } from "./EpisodeList";
import { Collapse } from "./Collapse";

export const MainList = () => {
    return(
        <div>
            <Collapse
          className="location"
          title="Location List"
          content={
            <LocationList/>
          }
        />
            <Collapse
          className="episode"
          title="Episode List"
          content={
            <EpisodeList/>
          }
        />
        </div>
    )
}