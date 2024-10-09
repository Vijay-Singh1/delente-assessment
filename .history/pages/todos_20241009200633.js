import { CircularProgress, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
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
        <ListItem key={todo.id}>
          <ListItemIcon>
            {todo.completed ? <CheckIcon color="primary" /> : null} {/* Optional icon for completed todos */}
          </ListItemIcon>
          <ListItemText primary={todo.title} />
        </ListItem>
      ))}
    </List>
  );
}
