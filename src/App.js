import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";

export function App() {
  return <div>
    <MenuListItem difficulty={"hard"} />
    {/* <DisplayDifficulty difficulty={""}/> */}
  </div>
}