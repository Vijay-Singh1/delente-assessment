import { CircularProgress, List, ListItem, ListItemText, ListItemIcon,  Typography, Paper, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check'; 
import { useTheme } from '../contexts/theme';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTodos(data.slice(0, 10));
      setLoading(false);
    }
    fetchTodos();
  }, []);

  if (loading) {
    return  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    padding={2}
    width={"100%"}
    sx={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
  ><CircularProgress /></Box>; 
  }

  return (
    <List sx={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      {todos.map(todo => (
        <Paper 
          key={todo.id} 
          elevation={3} 
          sx={{ margin: '10px', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }} 
        >
          <Typography variant="h6" gutterBottom>
            Todo #{todo.id}
          </Typography>
          <ListItem>
            <ListItemIcon>
              {todo.completed ? <CheckIcon color="primary" /> : null}
            </ListItemIcon>
            <ListItemText primary={todo.title} />
          </ListItem>
        </Paper>
      ))}
    </List>
  );
}
