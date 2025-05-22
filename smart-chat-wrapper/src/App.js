// src/App.js
import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Container, Typography, Paper, Chip, TextField, IconButton } from '@mui/material';
import { Send, Star, Notifications, Search } from '@mui/icons-material';
import MessageList from './components/MessageList';
import AIAssistant from './components/AIAssistant';

function App() {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  // Simulate fetching messages from API
  useEffect(() => {
    // In real app, this would connect to WhatsApp/Telegram API
    const demoMessages = [
      { id: 1, text: "Community meeting tomorrow at 6pm", sender: "Admin", timestamp: new Date(), important: true, category: "announcement" },
      { id: 2, text: "Has anyone seen the latest event schedule?", sender: "Member", timestamp: new Date(), important: false, category: "question" },
      { id: 3, text: "URGENT: Water supply will be interrupted tomorrow", sender: "Admin", timestamp: new Date(), important: true, category: "alert" },
      { id: 4, text: "Thanks for the update!", sender: "Member", timestamp: new Date(), important: false, category: "comment" }
    ];
    setMessages(demoMessages);
    setFilteredMessages(demoMessages);
  }, []);

  // Filter messages based on search and importance
  useEffect(() => {
    const filtered = messages.filter(msg => 
      msg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (searchQuery === '' && msg.important)
    );
    setFilteredMessages(filtered);
  }, [searchQuery, messages]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Smart Chat Assistant
        </Typography>
        
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Search sx={{ mr: 1 }} />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search messages or ask a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
          
          <MessageList messages={filteredMessages} />
        </Paper>
        
        <AIAssistant onResponse={setAiResponse} />
        
        {aiResponse && (
          <Paper elevation={3} sx={{ p: 2, mt: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h6">AI Assistant Response</Typography>
            <Typography>{aiResponse}</Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}

export default App;