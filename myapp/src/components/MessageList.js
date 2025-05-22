// src/components/MessageList.js
import React from 'react';
import { List, ListItem, ListItemText, Avatar, ListItemAvatar, Chip, Typography } from '@mui/material';
import { Star, Notifications } from '@mui/icons-material';

const MessageList = ({ messages }) => {
  return (
    <List sx={{ width: '100%' }}>
      {messages.map((message) => (
        <ListItem 
          key={message.id}
          alignItems="flex-start"
          sx={{
            mb: 1,
            borderLeft: message.important ? '4px solid #ffc107' : 'none',
            backgroundColor: message.important ? '#fff8e1' : 'inherit'
          }}
        >
          <ListItemAvatar>
            <Avatar>{message.sender.charAt(0)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography component="span" fontWeight="bold">
                  {message.sender}
                </Typography>
                {message.important && (
                  <Chip 
                    icon={<Notifications />} 
                    label="Important" 
                    size="small" 
                    sx={{ ml: 1 }} 
                  />
                )}
              </>
            }
            secondary={message.text}
          />
          {message.important && <Star color="warning" />}
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;