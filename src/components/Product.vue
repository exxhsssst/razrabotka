<template>
  <div class="product-management">
    // ... (остальной код)
  </div>
</template>

<script>
// ... (ваш код JavaScript)

export default {
  name: "ProductManagement", // Исправлено имя компонента
  // ... (остальной код)
};
</script>

// ... (стили)
<style scoped>
.product-management {
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
}

.product-form {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  grid-gap: 20px;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
}

.product-card img {
  width: 100%;
  height: 200px; 
  object-fit: cover; 
}

.card-body {
  padding: 20px;
}

.card-title {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.card-text {
  font-size: 16px;
  color: #555;
}

.actions {
  position: absolute;
  top: 10px; 
  right: 10px; 
}

.actions i {
  cursor: pointer;
  margin-left: 10px; 
  color: #007bff;
}
</style>