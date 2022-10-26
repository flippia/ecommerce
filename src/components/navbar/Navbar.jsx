import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import moment from "moment";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const { purchased, toggleCart } = useContext(CartContext);
  const renderTime = moment().toString();

  return (
    <div className={styles.navbar}>
      <NavLink
        replace
        to="/"
        className={(navData) => (navData.isActive ? styles.active : "")}
      >
        Home
      </NavLink>
      <div className={styles.functions}>
        {/* <div>{renderTime}</div> */}
        <SearchBar />
        <IconButton aria-label="cart" onClick={toggleCart}>
          <StyledBadge badgeContent={purchased} color="secondary">
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
