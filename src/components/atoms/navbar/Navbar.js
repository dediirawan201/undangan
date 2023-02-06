import React, { useState } from "react";
import {
  BsFillSuitHeartFill,
  BsFillHouseFill,
  BsCalendar2WeekFill,
  BsGiftFill,
  BsChatSquareTextFill
} from "react-icons/bs";
import "./navbar.css";
 
const Navbar = ({scrool,active}) => {
  const [selected, setSelected] = useState(0);
  // console.log(active(selected))
  const menus = [
    {
      id:1,
      icon: <BsFillHouseFill size={25} />,
      name: "Home",
    },
    {
      id:2,
      icon: <BsFillSuitHeartFill size={25} />,
      name: "Mempelai",
    },
    {
      id:3,
      icon: <BsCalendar2WeekFill size={25} />,
      name: "Acara",
    },
    {
      id:4,
      icon: <BsGiftFill size={25} />,
      name: "Gift",
    },
    {
      id:5,
      icon: <BsChatSquareTextFill size={25} />,
      name: "Ucapan",
    },
  ];

    
  
  return (
    <div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
            onClick={() => setSelected(index)}
            key={index}
            className={index === selected ? 'active' : ""}
            >
            <a className="tabIcon"  onClick={() => scrool(val.id)}>
              <div className="icon">{val.icon}</div>
              <div className="name">{val.name}</div>
              </a>
            </li>
          );
        })}
        <div className="menu-bg" />
      </ul>
    </div>
  );
}

export default Navbar;