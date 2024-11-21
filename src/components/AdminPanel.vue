<template>
    <div class="admin-panel">
      <h2>Админ панель</h2>
  
      <div class="admin-sections">
        <button @click="activeSection = 'products'" :class="{ active: activeSection === 'products' }">
          Товары
        </button>
        <button @click="activeSection = 'categories'" :class="{ active: activeSection === 'categories' }">
          Категории
        </button>
        <button @click="activeSection = 'orders'" :class="{ active: activeSection === 'orders' }">
          Заказы
        </button>
      </div>
  
      <div v-if="activeSection === 'products'" class="section">
        <h3>Товары</h3>
        <p>Здесь будет список товаров с возможностью добавления, редактирования и удаления.</p>
        <button @click="addProduct">Добавить товар</button>
      </div>
  
      <div v-if="activeSection === 'categories'" class="section">
        <h3>Категории</h3>
        <p>Здесь будет список категорий с возможностью добавления, редактирования и удаления.</p>
        <button @click="addCategory">Добавить категорию</button>
      </div>
  
      <div v-if="activeSection === 'orders'" class="section">
        <h3>Заказы</h3>
        <p>Здесь будет список заказов.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeSection: 'products'
      };
    },
    methods: {
      addProduct() {
        // TODO: Логика добавления товара
        console.log('Добавление товара');
      },
      addCategory() {
        // TODO: Логика добавления категории
        console.log('Добавление категории');
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-panel {
    padding: 30px;
    font-family: 'Open Sans', sans-serif;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 50px auto;
  }
  
  .admin-panel h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .admin-sections {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .admin-sections button {
    background-color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .admin-sections button:hover {
    background-color: #f0f0f0;
  }
  
  .admin-sections button.active {
    background-color: #007bff;
    color: white;
  }
  
  .section {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
  }
  
  .section h3 {
    margin-bottom: 10px;
  }
  
  .section p {
    margin-bottom: 20px;
  }
  
  .section button {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>