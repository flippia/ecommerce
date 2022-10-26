import styles from './Product.module.css';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Product = () => {
    const { id } = useParams();
    const { data: item, isPending, error } = useFetch('https://flippia-api.herokuapp.com/products/' + id)

    const { cartItems, showCart, purchased, toggleCart, addItem, decreaseItem } = useContext(CartContext)

    const handleAdd = () => {
        addItem({ ...item, duplicates: 1 })
    }

    return (
        <div>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {item && <div>
                <h1 className={styles.title}>{item.title}</h1>
                <div className={styles.product}>
                    <div className={styles['text-info']}>
                        <p>{item.description}</p>
                        <h3>Rating</h3>
                        <h4>Rates: {item.rating.rate}</h4>
                        <h4>Counts: {item.rating.count}</h4>
                        <button onClick={handleAdd}>Add to Cart</button>
                    </div>
                    <div className={styles['img-box']}>
                        <img src={item.image} alt='product image' />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Product;