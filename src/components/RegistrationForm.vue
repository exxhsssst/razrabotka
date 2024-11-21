<template>
  <div class="registration-form">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="login">Логин:</label>
        <input type="text" id="login" v-model="login" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="passwordConfirm">Повторите пароль:</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" required>
      </div>
      <button type="submit" class="submit-button">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  },
  methods: {
    register() {
      // Проверка совпадения паролей
      if (this.password !== this.passwordConfirm) {
        alert('Пароли не совпадают!');
        return;
      }

      // TODO: Отправка данных на сервер (Laravel API) для регистрации

      // Временная заглушка: сохранение данных в localStorage
      const userData = {
        login: this.login,
        email: this.email,
        password: this.password
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      // Перенаправление на главную страницу
      this.$router.push('/products'); 
    }
  }
};
</script>

<style scoped>
.registration-form {
  /* Минималистичный дизайн */
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.submit-button {
  background-color: #28a745;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>