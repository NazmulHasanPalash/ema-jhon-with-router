import React from 'react';
import Useproducts from '../../hooks/Useproducts';
import Usecart from '../../hooks/Usecart';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = Useproducts();
    const [cart, setCart] = Usecart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/placeorder');
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <Reviewitem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></Reviewitem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;