// store.js
import { create } from 'zustand';

// create definierar både det initiala tillståndet och en uppsättning åtgärder (som addToCart) 
const useStore = create((set) => ({ // Vi skapar vår store och "sätter" följande tillstånd:



// THE CART
  cart: [],

  showCart: false,

  addToCart: (product) => set((state) => { // product = addToCart tar objektet product som argument, set-funktionen uppdaterar tillståndet, state är nuvarande tillstånd som argument till uppdateringsfunktionen som vi sätter in i set.

    const existingProductIndex = state.cart.findIndex((p) => p.id === product.id); // state.cart är ju den tomma arrayen vi skapade ovan. denna kör vi findIndex på

    if (existingProductIndex !== -1) { // Produkt finns redan, uppdatera quantity. Om existingProductIndex har någon annan siffra än -1, dvs. om den inte har -1
      let newCart = [...state.cart]; // så skapar vi en newCart, som vi ger värdet state.cart. Detta är vår carts dåvarande tillstånd. 
      newCart[existingProductIndex].quantity += 1; // Antag att varje produktobjekt nu har en 'quantity'-property
      return { cart: newCart };
    } else {
      // Produkt finns inte, lägg till med quantity = 1
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }

  }),

  
  updateProductQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map((product) =>
      product.id === productId ? { ...product, quantity: quantity } : product
    ),
  })),
  

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((product) => product.id !== productId),
  })),


  setShowCart: (show) => set(() => ({ showCart: show })), // ska visa / dölja carten när man trycker på knappen
// // // // // // // 




// THE USER
  user: null,
  setUser: (user) => set(() => ({ user })),
// // // // // // // 




// ORDERSTATUS
orders: [],
orderDetails: null,

sendOrder: () => set(() => {
  const ordernumber = Math.floor(Math.random() * 1000); 
  const eta = Math.floor(Math.random() * 20) + 10;

  return {orderDetails:{ ordernumber, eta } }
}),
// // // // // // // 






}));

export default useStore;
