// src/services/aiService.js
import axios from 'axios';

const analyzeMessage = async (message) => {
  // In a real implementation, this would call your backend or directly to OpenAI
  try {
    const response = await axios.post('/api/analyze', { text: message });
    return {
      importance: response.data.importance,
      categories: response.data.categories,
      summary: response.data.summary
    };
  } catch (error) {
    console.error("AI analysis failed:", error);
    return { importance: 0.5, categories: [], summary: '' };
  }
};

const answerQuestion = async (question, context) => {
  try {
    const response = await axios.post('/api/answer', { 
      question,
      context 
    });
    return response.data.answer;
  } catch (error) {
    console.error("AI question answering failed:", error);
    return "I couldn't process your question at the moment. Please try again later.";
  }
};

export { analyzeMessage, answerQuestion };