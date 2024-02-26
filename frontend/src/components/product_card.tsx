import { FaPlus } from "react-icons/fa";

type Props = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    stock: number;
    handler: () => void;
}

const server = "adsgdfgdfgdgf";

const Product_Card = ({
    productId, price, name, photo, stock, handler,
}: Props) => {
    return (
        <div className="product-card">
            <img
                src={photo}
                // src={`${server}/${photo}`}

                alt={name} />
            <p>{name}</p>
            <span>₹{price}</span>
            <div>
                <button
                    onClick={() => handler()}
                ><FaPlus /></button>
            </div>
        </div>
    )
}

export default Product_Card