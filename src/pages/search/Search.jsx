import styles from './Search.module.css';
import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router';
import ProductList from '../../components/productList/ProductList';

const Search = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'https://flippia-api.herokuapp.com/products?q=' + query
    const { error, isPending, data } = useFetch(url)

    return (
        <div className={styles.search}>
            <h2>Products including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <ProductList products={data} />}
        </div>
    );
}

export default Search;