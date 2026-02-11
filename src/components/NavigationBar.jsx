import { NavLink } from "react-router";
import "./NavigationBar.css";

//det er vigtigt at links i NavigationBar.jsx passer med Routes i App.jsx, ellers kører løsningen ikke
//NavLink laver bedre navigation

export default function NavigationBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </nav>
  );
}
