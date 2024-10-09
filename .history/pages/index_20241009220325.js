

import Link from 'next/link';
import posts from '../public/posts.json';
import { Card, CardContent, CardActions, Button, Box, Typography } from '@mui/material';
import { useTheme } from '../contexts/theme';


export default function Home() {
  const { theme } = useTheme();

  return (
    <Box  display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} sx={{  display: "flex", justifyContent: "flex-start",  }}>
        {posts.map(post => (
          <Card key={post.id} sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography  component="div">
                {post.title}
              </Typography>
              
            </CardContent>
            <CardActions>
              <Link href={`/posts/${post.id}`} passHref>
                <Button size="small" variant="contained" sx={{ backgroundColor: theme === 'light' ? '#0972D3' : 'black' }}>
                  Go To Post
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
