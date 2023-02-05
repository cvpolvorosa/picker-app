import { useState } from "react"
import s from "./style.module.css"
export const MenuListItem = (props) => {
    const [isHovered, setIsHover] = useState(false)

    function activate() {
        setIsHover(true)
    }
    function deactivate() {
        setIsHover(false)
    }

    function getBackgroundColor() {
        if (isHovered) {
            return "Green"
        } else{
           if(props.isSelected){
            return "Green"
           } 
           return "Red"
        }     
    }

    const onItemClick = () => {
        props.onClick(props.difficulty)
    }

    console.log("Is hovered?", isHovered)
    return <div
        onClick={onItemClick}
        className={s.container}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        style={{ backgroundColor: getBackgroundColor() }}>
        Set difficulty to: {props.difficulty}
    </div>
}