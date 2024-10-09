import { CircularProgress, List, ListItem, ListItemText, ListItemIcon,  Typography, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check'; // Optional: an icon for completed todos

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return <CircularProgress />; // Loading spinner
  }

  return (
    <List>
      {todos.map(todo => (
        <Paper 
          key={todo.id} 
          elevation={3} // Optional: adds a shadow effect
          sx={{ margin: '10px', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }} // Custom styles
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
