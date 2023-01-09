import React, { useState } from "react";
import {
  BsFillBagCheckFill,
  BsFillHouseFill,
  BsFillChatSquareFill,
  BsClockFill,
  BsGearFill,
} from "react-icons/bs";
import "./navbar.css";

const Navbar = ({scrool}) => {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      id:1,
      icon: <BsFillHouseFill size={25} />,
      name: "Home",
    },
    {
      id:2,
      icon: <BsFillBagCheckFill size={25} />,
      name: "Orders",
    },
    {
      id:3,
      icon: <BsFillChatSquareFill size={25} />,
      name: "Chat",
    },
    {
      id:4,
      icon: <BsClockFill size={25} />,
      name: "History",
    },
    {
      id:5,
      icon: <BsGearFill size={25} />,
      name: "Settings",
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
              className={index === selected ? "active" : ""}
            >
            <a onClick={() => scrool(val.id)}>
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