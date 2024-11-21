<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="container">
          <router-link to="/" class="logo">Computer Parts</router-link> 
          <ul v-if="!isMobile" class="nav-links">
            <li>
              <router-link to="/admin">Админ</router-link>
            </li>
            <li>
              <router-link to="/cart">Корзина</router-link>
            </li>
            <li v-if="!isLoggedIn" @click="goToRegistration">
              Регистрация
            </li>
            <li v-if="isLoggedIn" @click="goToAccount">
              Аккаунт
            </li>
            <li v-if="isLoggedIn" @click="logout">
              Выход
            </li>
          </ul>
          <div v-else @click="toggleMobileMenu" class="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </nav>
      <ul v-if="isMobile && showMobileMenu" class="mobile-nav-links">
        <li>
          <router-link to="/admin">Админ</router-link>
        </li>
        <li>
          <router-link to="/cart">Корзина</router-link>
        </li>
        <li v-if="!isLoggedIn" @click="goToRegistration">
          Регистрация
        </li>
        <li v-if="isLoggedIn" @click="goToAccount">
          Аккаунт
        </li>
        <li v-if="isLoggedIn" @click="logout">
          Выход
        </li>
      </ul>
    </header>

    <router-view /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: !!localStorage.getItem('userData'), 
      isMobile: false,
      showMobileMenu: false
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    goToRegistration() {
      this.$router.push('/'); 
    },
    goToAccount() {
      this.$router.push('/account');
    },
    logout() {
      localStorage.removeItem('userData');
      this.isLoggedIn = false;
      this.$router.push('/'); 
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>

<style scoped>
/* Минималистичный и современный дизайн */
.navbar {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none; 
  color: #333; 
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-links li {
  margin-left: 30px;
  cursor: pointer;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
}

/* ... (медиа-запросы для мобильного меню) ... */
</style>