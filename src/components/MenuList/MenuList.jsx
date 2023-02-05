import { MenuListItem } from "../MenuListItem/MenuListItem"
import s from "./style.module.css"
export const MenuList = (props) => {
    return <div className={s.container}>
        <MenuListItem difficulty={"Low"}/>
        <MenuListItem difficulty={"Normal"}/>
        <MenuListItem difficulty={"Hard"}/>
        <MenuListItem difficulty={"Very Hard"}/>
    </div>
}