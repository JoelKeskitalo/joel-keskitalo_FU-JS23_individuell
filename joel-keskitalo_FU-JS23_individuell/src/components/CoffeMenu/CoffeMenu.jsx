import './coffemenu.scss';
import NavigateButton from '../NavigateButton/NavigateButton';
import useStore from '../Store/Store.jsx';
import Cart from '../Cart/Cart.jsx';



function CoffeMenu() {

    const { addToCart, showCart, setShowCart } = useStore((state) => ({
        addToCart: state.addToCart,
        showCart: state.showCart,
        setShowCart: state.setShowCart,
    }));



    const products = [
        { id: 1, name: 'Bryggkaffe', price: 49 },
        { id: 2, name: 'Caffè Doppio', price: 49 },
        { id: 3, name: 'Cappuccino', price: 49 },
        { id: 4, name: 'Latte Macchiato', price: 49 },
        // Lägg till fler produkter efter behov
      ];



    return (

        <div className='coffemenupage-container'>

            <NavigateButton to="/menu" buttonText="Meny"/>

            <button className="cart-button" onClick={() => setShowCart(!showCart)}>Visa Varukorg</button>

            {showCart && (
            <div className="cart-overlay">
                <Cart />
            </div>
            )}

            <header className='coffemenupage-header'></header>

            <h1>Meny</h1>


        <nav className='coffemenu'>
            <ul>
            {products.map((product) => (
                <li key={product.id} className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button' onClick={() => addToCart(product)}>+</button>
                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>{product.name}</h2>
                            <p className='kaffe-description'>{product.price} kr</p>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </nav>

            <footer className='coffemenu-footer'></footer>

        </div>
    )
}

export default CoffeMenu;