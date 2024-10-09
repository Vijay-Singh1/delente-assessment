// import Link from 'next/link';
// import posts from '../public/posts.json';

// export default function Home() {
//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Link href="/posts/[id]" as={ `/posts/${post.id}`}>
//             Go to Post {/* No <a> tag needed */}
//         </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




// import Link from 'next/link';
// import posts from '../public/posts.json';
// import { useTheme } from './theme';
// export default function Home() {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <div >
//       <h1>Blog Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Link href={`/posts/${post.id}`}>
//               Go to Post {post.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>

//   );
// }


import Link from 'next/link';
import posts from '../public/posts.json';
import { Card, CardContent, CardActions, Button, Box, Typography } from '@mui/material';

export default function Home() {
 

  return (
    <Box  display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} sx={{  display: "flex", justifyContent: "flex-start",  }}>
        {posts.map(post => (
          <Card key={post.id} sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/posts/${post.id}`} passHref>
                <Button size="small" variant="contained" sx={{ backgroundColor: theme === 'light' ? '#0972D3' : 'black' }}>
                  Go to Post
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
