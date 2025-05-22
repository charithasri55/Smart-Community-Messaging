// src/api/chatApi.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const processMessage = (message) => {
  return axios.post(`${API_URL}/messages/process`, message);
};

export const getAutoReply = (message) => {
  return axios.post(`${API_URL}/messages/auto-reply`, message);
};

export const getChatHistory = (groupId) => {
  return axios.get(`${API_URL}/chats/${groupId}`);
};