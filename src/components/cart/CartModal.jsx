import styles from './CartModal.module.css'
import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartModal = () => {
    const { cartItems, toggleCart, addItem, decreaseItem } = useContext(CartContext)

    const handleClose = e => {
        if (e.target.className.includes('backdrop')) {
            toggleCart()
        }
    }

    return (
        <div className={styles['cart-backdrop']} onClick={handleClose}>
            <div className={styles.cart}>
                <h2>This is cart</h2>
                <div className={styles.items}>
                    {cartItems && cartItems.map(item => (
                        <div className={styles['one-item']} key={item.id}>
                            <h4>{item.title}</h4>
                            <h5>{`${item.duplicates} pcs`}</h5>
                        </div>
                    ))}
                </div>
                <NavLink replace to="/cart" onClick={toggleCart}>
                    <p>Go to cart page</p>
                </NavLink>
            </div>
        </div>
    );
}

export default CartModal;