import { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { useTheme } from '../contexts/theme';

export default function Counter() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" 
      bgcolor="#f5f5f5" 
      sx={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
    >
      <Paper 
        elevation={3} 
        sx={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }} 
      >
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setCount(count + 1)} 
            sx={{ margin: '0 10px',color: theme === 'light' ? 'black' : 'white' ,backgroundColor: theme === 'light' ? 'white' : 'black' }} // Margin between buttons
          >
            Increment
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => setCount(count - 1)} 
            disabled={count <= 0} 
            sx={{ margin: '0 10px' }} 
          >
            Decrement
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
