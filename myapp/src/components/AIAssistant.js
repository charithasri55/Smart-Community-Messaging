// src/components/AIAssistant.js
import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';

const AIAssistant = ({ onResponse }) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, this would call an AI service API
    const responses = {
      'meeting': 'The next community meeting is tomorrow at 6pm at the community center.',
      'event': 'The annual community fair is scheduled for next Saturday.',
      'water': 'Water supply interruption is planned for tomorrow from 9am to 3pm for maintenance.'
    };
    
    const lowerQuery = query.toLowerCase();
    const response = responses[lowerQuery] || 
      `I found several messages about "${query}". Would you like me to summarize them?`;
    
    onResponse(response);
    setQuery('');
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Ask the Community Assistant
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask about upcoming events, meetings, etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton type="submit" color="primary">
          <Send />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default AIAssistant;