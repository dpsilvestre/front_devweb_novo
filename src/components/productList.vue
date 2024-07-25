<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

const productStore = useProductStore();

async function getProducts() {
  await productStore.getProducts();
}

onMounted(async () => {
  await getProducts();
});
</script>

<template>
  <div class="product-list">
    <div v-if="productStore.products.length === 0">
      <p>Produtos não encontrados!</p>
    </div>
    <div
      v-for="product in productStore.products"
      :key="product.id"
      class="product-card"
    >
      <div class="product-img-wrapper">
        <img :src="product.image?.url" alt="product.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="product-title-price">
        
        <p>{{ formatTitle(product.title) }}</p>
        <p>{{ formatPrice(product.price * 1) }}</p>
        
      </div>
      <div class="product-description-stars">
        
        <p>{{ formatDescription(product.description) }}</p>
        
        <div class="stars">
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.product-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.product-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

.product-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.product-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.product-description-stars p {
  font-size: 12px;
  color: #535050;
}
</style>