import { MenuListItem } from "../MenuListItem/MenuListItem"
import s from "./style.module.css"
export const MenuList = (props) => {
    return <div className={s.container}>
        <MenuListItem isSelected={props.difficulty==="Low"} onClick={props.onItemClick} difficulty={"Low"}/>
        <MenuListItem isSelected={props.difficulty==="Normal"} onClick={props.onItemClick} difficulty={"Normal"}/>
        <MenuListItem isSelected={props.difficulty==="Hard"} onClick={props.onItemClick} difficulty={"Hard"}/>
        <MenuListItem isSelected={props.difficulty==="Very Hard"} onClick={props.onItemClick} difficulty={"Very Hard"}/>
    </div>
}