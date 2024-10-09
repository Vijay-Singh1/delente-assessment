import { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

export default function Counter() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Full height of the viewport
      bgcolor="#f5f5f5" // Light background color
      style={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
    >
      <Paper 
        elevation={3} // Adds shadow to the Paper
        sx={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }} // Styling for the Paper component
      >
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setCount(count + 1)} 
            sx={{ margin: '0 10px' }} // Margin between buttons
          >
            Increment
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => setCount(count - 1)} 
            disabled={count <= 0} // Disable if count is 0
            sx={{ margin: '0 10px' }} // Margin between buttons
          >
            Decrement
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
