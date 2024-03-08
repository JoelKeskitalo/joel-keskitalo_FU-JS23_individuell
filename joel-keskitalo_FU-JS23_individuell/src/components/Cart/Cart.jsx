import './cart.scss';

function Cart() {


    return (

        <div className="cart">
        <h1>Din beställning</h1>
        
        <div className="cart-item">
          <h2>Bryggkaffe <span className="counter"><button>←</button> 1 <button>→</button></span></h2>
          <p>98kr</p>
        </div>
  
        <div className="cart-item">
          <h2>Espresso <span className="counter"><button>←</button> 1 <button>→</button></span></h2>
          <p>120kr</p>
        </div>
  
        <div className="cart-item">
          <h2>Latte <span className="counter"><button>←</button> 1 <button>→</button></span></h2>
          <p>125kr</p>
        </div>
  
        <h2>Total <span className="total">343kr</span></h2>
        <p>inkl moms + drönarleverans</p>
      </div>

    )
  }






export default Cart;