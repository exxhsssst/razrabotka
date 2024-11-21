import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '@/components/RegistrationForm.vue';
import ProductList from '@/components/ProductList.vue';
import AccountPage from '@/components/AccountPage.vue';
import CheckoutForm from '@/components/CheckoutForm.vue';
import Product from '@/components/Product.vue';

const routes = [
  {
    path: '/',
    name: 'Registration',
    component: RegistrationForm
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductList
  },
  {
    path: '/productadmin',
    name: 'Product',
    component: Product
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountPage
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
