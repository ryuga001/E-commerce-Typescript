import { Link } from 'react-router-dom'
import Product_Card from '../components/product_card'

const Home = () => {

    const addToCartHandler = () => {

    }

    return (
        <div className='home'>
            <section></section>
            <h1>Latest Products
                <Link to={"/search"} className='findmore' >More</Link>
            </h1>
            <main>
                <Product_Card
                    productId='adfd'
                    name='Macbook'
                    price={8983}
                    stock={344}
                    handler={addToCartHandler}
                    photo="https://m.media-amazon.com/images/I/41UnYGu7AGL._SY445_SX342_QL70_FMwebp_.jpg" />
            </main>
        </div>
    )
}

export default Home