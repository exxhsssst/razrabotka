<template>
  <div class="product-list">
    </div>

    <div class="products-grid">
      <div v-for="product in filteredAndSortedProducts" :key="product.id" class="product-card">
        </div>
    </div>

    <button @click="toggleCart" class="cart-button">
      <i class="fas fa-shopping-cart"></i> Корзина ({{ cartItems.length }}) 
    </button>

    <div v-if="showCart" class="cart-sidebar">
      <h2>Корзина</h2>
      <ul v-if="cartItems.length > 0">
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.product.name }} - {{ item.product.price }} ₸
          <div class="quantity-controls">
            <button @click="decreaseQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
          <button @click="removeFromCart(index)" class="remove-button">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      </ul>
      <p v-else>Корзина пуста</p>
      <p v-if="cartItems.length > 0">Сумма: {{ totalPrice }} ₸</p>
      <button v-if="cartItems.length > 0" @click="checkout" class="checkout-button">Оформить заказ</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // Временные данные (позже будут загружаться с сервера)
      products: [
        { id: 1, name: 'Видеокарта NVIDIA GeForce RTX 3060', price: 150000, category_id: 1, image_url: 'https://via.placeholder.com/250x200' },
        { id: 2, name: 'Процессор Intel Core i5-12400F', price: 80000, category_id: 2, image_url: 'https://via.placeholder.com/250x200' },
        { id: 3, name: 'Оперативная память Crucial Ballistix 16GB DDR4', price: 30000, category_id: 3, image_url: 'https://via.placeholder.com/250x200' },
        { id: 4, name: 'SSD накопитель Samsung 980 1TB', price: 45000, category_id: 4, image_url: 'https://via.placeholder.com/250x200' },
        // ... другие товары
      ],
      categories: [
        { id: 1, name: 'Видеокарты' },
        { id: 2, name: 'Процессоры' },
        { id: 3, name: 'Оперативная память' },
        { id: 4, name: 'SSD накопители' },
        // ... другие категории
      ],
      searchQuery: '',
      selectedCategory: '',
      sortOption: '',
      cartItems: [], // Инициализируем пустым массивом
      showCart: false
    };
  },
  computed: {
    // ... (computed properties)
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ product, quantity: 1 });
      }
      this.updateCart();
    },
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.updateCart(); 
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.updateCart(); 
      }
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      this.updateCart(); 
    },
    checkout() {
      // TODO: Переход к оформлению заказа (CheckoutForm.vue)
      this.$router.push('/checkout');
    },
    updateCart() {
      // TODO: Логика обновления корзины в localStorage/Vuex
      console.log('Корзина обновлена:', this.cartItems);
    },
    toggleCart() {
      this.showCart = !this.showCart;
    }
  }
};
</script>

<style scoped>
/* ... другие стили ... */

..filter-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; 
}
.cart-sidebar .quantity-controls {
  display: flex;
  align-items: center;
}

.cart-sidebar .quantity-controls button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
}

.cart-sidebar .quantity-controls span {
  margin: 0 10px;
}

.cart-sidebar .remove-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-sidebar .remove-button:hover {
  background-color: #c82333;
}

/* ... другие стили ... */
</style>