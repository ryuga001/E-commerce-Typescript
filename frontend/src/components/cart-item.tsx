import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem: any;
};

// productId: "ads",
// photo: "https://c4.wallpaperflare.com/wallpaper/615/132/869/anime-girl-anime-art-cute-kawaii-wallpaper-preview.jpg",
// name: "macbook",
// price: 3000,
// quantity: 4,
// stock: 10,
const CartItem = ({ cartItem }: CartItemProps) => {
    const { photo, price, productId, name, quantity } = cartItem
    return (
        <div className="cart-item">
            <img src={photo} alt={name} />
            <article
            >
                <Link to={`/product/${productId}`}>{name}</Link>
                <span>₹{price}</span>
            </article>

            <div>
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
            </div>
            <button>
                <FaTrash />
            </button>

        </div>
    )
}

export default CartItem