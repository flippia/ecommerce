import styles from './ProductList.module.css'
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
    if(products.length === 0){
        return <div className='error'>No products to load</div>
    }
    return (
        <div className={styles['product-list']}>
            {products.map(product => (
                <Link to={`/product/${product.id}`} className={styles.card} key={product.id}>
                    <h3>{product.title}</h3>
                    <div>{product.description.substring(0,100)}...</div>
                </Link>
            ))}
        </div>
    );
}

export default ProductList;