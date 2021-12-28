import styles from './Home.module.css';
import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';
import ProductList from '../../components/productList/ProductList';

const Home = () => {
    const {data, isPending, error} = useFetch('https://flippia-api.herokuapp.com/products')

    return (
        <div className={styles.home}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <ProductList products={data} />}
        </div>
    );
}

export default Home;