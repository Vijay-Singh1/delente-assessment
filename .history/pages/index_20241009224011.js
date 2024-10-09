

// import Link from 'next/link';
// import posts from '../public/posts.json';
// import { Card, CardContent, CardActions, Button, Box, Typography } from '@mui/material';
// import { useTheme } from '../contexts/theme';


// export default function Home() {
//   const { theme } = useTheme();

//   return (
//     <Box  display="flex" flexDirection="column" alignItems="center" padding={2}>
//       <Typography variant="h4" gutterBottom>
//         Blog Posts
//       </Typography>
//       <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} sx={{  display: "flex", justifyContent: "flex-start",  }}>
//         {posts.map(post => (
//           <Card key={post.id} sx={{ maxWidth: 400 }}>
//             <CardContent>
//               <Typography  component="div">
//                 {post.title}
//               </Typography>
              
//             </CardContent>
//             <CardActions>
//               <Link href={`/posts/${post.id}`} passHref>
//                 <Button size="small" variant="contained" sx={{ backgroundColor: theme === 'light' ? '#0972D3' : 'black' }}>
//                   Go To Post
//                 </Button>
//               </Link>
//             </CardActions>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// }


import Link from 'next/link';
import posts from '../public/posts.json';
import { Card, CardContent, CardActions, Button, Box, Typography } from '@mui/material';
import { useTheme } from '../contexts/theme';

export default function Home() {
  const { theme } = useTheme();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={4}>
      <Typography variant="h3" gutterBottom>
        Blog Posts
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {posts.map(post => (
          <Card key={post.id} sx={{ maxWidth: 345, minWidth: 300, boxShadow: 3, borderRadius: 2, transition: '0.3s', 
              '&:hover': { boxShadow: 6, transform: 'scale(1.02)' }}}>
            <CardContent>
              <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.excerpt || "This is a short summary of the blog post."}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/posts/${post.id}`} passHref>
                <Button 
                  size="medium" 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: theme === 'light' ? '#0972D3' : '#333', 
                    '&:hover': { backgroundColor: theme === 'light' ? '#005bb5' : '#555' } 
                  }}>
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
