import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';

import AuthService from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});

  async function setToken(token) {
    user.value = await authService.postUserToken(token);
  }

  function unsetToken() {
    user.value = {};
  }

  return { user, setToken, unsetToken };
});

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('/users/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}