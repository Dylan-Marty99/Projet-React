import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">

      <NavLink className={({ isActive }) => isActive? "active": ''} to="/">
        Accueil
      </NavLink>

      <NavLink className={({ isActive }) => isActive? "active": ''} to="/news">
        News
      </NavLink>

      <NavLink className={({ isActive }) => isActive? "active": ''} to="/a-propos">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
