<template>
  <div class="account-page">
    <h2>Мой аккаунт</h2>
    <div v-if="user" class="account-details">
      <div class="form-group">
        <label for="login">Логин:</label>
        <input type="text" id="login" v-model="user.login" readonly>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" readonly>
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="user.password" readonly>
      </div>
      <button @click="editAccount" class="edit-button">Редактировать</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    // Загрузка данных пользователя из localStorage
    this.user = JSON.parse(localStorage.getItem('userData'));
  },
  methods: {
    editAccount() {
      // TODO: Реализация редактирования данных пользователя
      console.log('Редактирование аккаунта');
    }
  }
};
</script>

<style scoped>
.account-page {
  padding: 30px;
  font-family: 'Open Sans', sans-serif;
  background-color: #f8f9fa; /* Светло-серый фон */
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
}

.account-page h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.account-details {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da; /* Светло-серая граница */
  border-radius: 4px;
  box-sizing: border-box;
}

.edit-button {
  background-color: #007bff; /* Синий цвет */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>