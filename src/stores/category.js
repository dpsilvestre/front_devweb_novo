import { ref } from 'vue';
import { defineStore } from 'pinia';

import CategoryService from '@/services/category';
const categoryService = new CategoryService();

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([]);

  async function getCategories() {
    categories.value = await categoryService.getCategories();
  }

  async function createCategory(category) {
    await categoryService.createCategory(category);
    getCategories();
  }

  return { categories, getCategories, createCategory };
});