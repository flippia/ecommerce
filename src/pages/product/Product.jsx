import styles from './Product.module.css';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

const Product = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('https://flippia-api.herokuapp.com/products/' + id)

    return (
        <div>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <div>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.product}>
                    <div className={styles['text-info']}>
                        <p>{data.description}</p>
                        <h3>Rating</h3>
                        <h4>Rates: {data.rating.rate}</h4>
                        <h4>Counts: {data.rating.count}</h4>
                    </div>
                    <div className={styles['img-box']}>
                        <img src={data.image} alt='product image' />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Product;