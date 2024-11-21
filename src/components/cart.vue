<template>
    <div class="cart-page">
      <h2>Корзина</h2>
  
      <div v-if="cartItems.length > 0" class="cart-items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <img :src="item.product.image_url" :alt="item.product.name" class="cart-item-image">
          <div class="cart-item-details">
            <h3>{{ item.product.name }}</h3>
            <p class="cart-item-price">{{ item.product.price }} ₸</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(index)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(index)">+</button>
            </div>
          </div>
          <button @click="removeItem(index)" class="remove-button">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
  
      <p v-else class="empty-cart">Ваша корзина пуста.</p>
  
      <div v-if="cartItems.length > 0" class="cart-summary">
        <h3>Итого: {{ totalPrice }} ₸</h3>
        <button @click="checkout" class="checkout-button">Оформить заказ</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          // Временные данные (позже будут загружаться из localStorage/Vuex)
          // { product: { id: 1, name: '...', price: ..., image_url: '...' }, quantity: 1 },
          // ...
        ]
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
      }
    },
    methods: {
      increaseQuantity(index) {
        this.cartItems[index].quantity++;
        this.updateCart(); // Обновление корзины в localStorage/Vuex
      },
      decreaseQuantity(index) {
        if (this.cartItems[index].quantity > 1) {
          this.cartItems[index].quantity--;
          this.updateCart(); // Обновление корзины в localStorage/Vuex
        }
      },
      removeItem(index) {
        this.cartItems.splice(index, 1);
        this.updateCart(); // Обновление корзины в localStorage/Vuex
      },
      checkout() {
        // TODO: Переход к оформлению заказа (CheckoutForm.vue)
        this.$router.push('/checkout');
      },
      updateCart() {
        // TODO: Логика обновления корзины в localStorage/Vuex
        console.log('Корзина обновлена:', this.cartItems);
      }
    }
  };
  </script>
  
  <style scoped>
  /* ... другие стили ... */
  
  .quantity-controls {
    display: flex;
    align-items: center;
  }
  
  .quantity-controls button {
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .quantity-controls span {
    margin: 0 10px;
  }
  
  .remove-button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .remove-button:hover {
    background-color: #c82333;
  }
  
  /* ... другие стили ... */
  </style>