
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../contexts/theme';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppBar position="static" sx={{ backgroundColor: theme === 'light' ? '#0972D3' : 'black', borderBottom : "1px solid lightGray" }}>
            <Toolbar>
                <Typography  component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
                    <Link href="/products" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Products</Link>
                    <Link href="/users" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Users</Link>
                    <Link href="/counter" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Counter</Link>
                    <Link href="/todos" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Todos</Link>
                    <Link href="/posts" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Posts</Link>
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={toggleTheme}
                    sx={{ ml: 1 }}
                >
                    {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

