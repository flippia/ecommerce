import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        console.log(styles)
    },[])

    return (
        <div className={styles.navbar}>
            <NavLink replace to="/" className={navData => navData.isActive ? styles.active : ""}>Home</NavLink>
            <NavLink replace to="/cart" className={navData => navData.isActive ? styles.active : ""}>Shopping Cart</NavLink>
        </div>
    );
}

export default Navbar;