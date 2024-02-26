import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
    {
        productId: "ads",
        photo: "https://m.media-amazon.com/images/I/41UnYGu7AGL._SY445_SX342_QL70_FMwebp_.jpg",
        name: "macbook",
        price: 3000,
        quantity: 4,
        stock: 10,
    }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCarges = 200;
const total = subtotal + tax + shippingCarges;
const discount = 299;

const Cart = () => {
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidcouponCode, setIsValidCouponCode] = useState<boolean>(false);

    useEffect(() => {

        const timeOutID = setTimeout(() => {
            if (Math.random() > 0.5) setIsValidCouponCode(true)
            else setIsValidCouponCode(false);
        }, 1000)

        return () => {
            clearTimeout(timeOutID);
            setIsValidCouponCode(false);
        }
    }, [couponCode])

    return (
        <div className="cart">
            <main>
                {
                    cartItems.length > 0 ? (cartItems.map((i, idx) =>
                        <CartItem key={idx} cartItem={i} />
                    )) : (<h1>No Items Added</h1>)
                }

            </main>
            <aside>
                <p>Subtotal : ₹{subtotal}</p>
                <p>Shipping Charges: ₹{shippingCarges}</p>
                <p>Tax : ₹{tax}</p>
                <p>Discont - <em> ₹{discount}</em></p>
                <p>Total <b> ₹{total}</b></p>
                <input type="text" value={couponCode}
                    placeholder="Coupon Code"
                    onChange={(e) => setCouponCode(e.target.value)} />

                {
                    couponCode && (isValidcouponCode ?
                        (<span className="green">₹{discount} off using this <code>{couponCode}</code></span>) : (<span className="red">Invalid
                            <VscError />
                        </span>))
                }

                {
                    cartItems.length > 0 && <Link to={"/shipping"} >Checkout</Link>
                }

            </aside>
        </div>
    )
}

export default Cart