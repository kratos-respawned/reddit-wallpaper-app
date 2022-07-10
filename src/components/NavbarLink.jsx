import { NavLink } from "react-router-dom";
let NavbarLink = (props) => {
  return (
    <>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#ca1a1a" : "#121212",
            };
          }}
          to={props.link}
        >
          {props.text}
        </NavLink>
      </li>
    </>
  );
};
export default NavbarLink;
