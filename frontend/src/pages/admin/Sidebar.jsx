/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  TfiAlignJustify,
  TfiHome,
  TfiVideoCamera,
  TfiGame,
  TfiUser,
  TfiCup,
  TfiGallery,
  TfiLayersAlt,
  TfiIdBadge,
} from "react-icons/tfi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin",
      name: "Homepage",
      icon: <TfiHome />,
    },
    {
      path: "/admin/videos",
      name: "Videos",
      icon: <TfiVideoCamera />,
    },
    {
      path: "/admin/games",
      name: "Jeux",
      icon: <TfiGame />,
    },
    {
      path: "/admin/teams",
      name: "Equipes",
      icon: <TfiCup />,
    },
    {
      path: "/admin/sliders",
      name: "Sliders",
      icon: <TfiLayersAlt />,
    },
    {
      path: "/admin/grilles",
      name: "Grilles",
      icon: <TfiGallery />,
    },

    {
      path: "/admin/profils",
      name: "Profils",
      icon: <TfiIdBadge />,
    },
  ];
  return (
    <div className="sdb-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="user-icon"
          >
            <TfiUser />
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <TfiAlignJustify onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item) => (
          <NavLink to={item.path} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <Link to="/" className="link" activeclassName="active">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Retour sur le site
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
