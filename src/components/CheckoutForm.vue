<template>
  <div class="checkout-form">
    <h2>Оформление заказа</h2>
    <form @submit.prevent="submitOrder">
      <div class="form-group">
        <label for="name">Имя:</label>
        <input type="text" id="name" class="form-control" v-model="name" required placeholder="Введите ваше имя">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" class="form-control" v-model="email" required placeholder="Введите ваш email">
      </div>
      <div class="form-group">
        <label for="address">Адрес доставки:</label>
        <input type="text" id="address" class="form-control" v-model="address" required placeholder="Введите ваш адрес">
      </div>
      <button type="submit" class="submit-button">Подтвердить заказ</button>
    </form>

    <div v-if="orderSubmitted" class="success-message">
      <i class="fas fa-check-circle"></i> Заказ успешно оформлен! Номер вашего заказа: {{ orderNumber }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
      orderSubmitted: false,
      orderNumber: null // Добавлено поле для номера заказа
    };
  },
  methods: {
    submitOrder() {
      this.orderSubmitted = true;
      // Генерация случайного номера заказа (для примера)
      this.orderNumber = Math.floor(Math.random() * 100000); 

      console.log('Заказ оформлен:', {
        name: this.name,
        email: this.email,
        address: this.address
      });
    }
  }
};
</script>

<style scoped>
.checkout-form {
  max-width: 400px;
  margin: 30px auto; 
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
}

.checkout-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px; 
}

.form-group label {
  display: block; 
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; 
}

.submit-button {
  background-color: #4CAF50; 
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; 
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049; 
}

.success-message {
  background-color: #d4edda; 
  border-color: #c3e6cb; 
  color: #155724; 
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px; 
  text-align: center; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}

.success-message i {
  margin-right: 10px; 
  font-size: 20px;
}
</style>