// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [],

  showCart: false,

  user: null,

  orders: [],


  addToCart: (product) => set((state) => {
    const existingProductIndex = state.cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) { // Produkt finns redan, uppdatera quantity
      let newCart = [...state.cart];
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



  
  setUser: (user) => set(() => ({ user })),
  setOrders: (orders) => set(() => ({ orders })),
}));


export default useStore;
