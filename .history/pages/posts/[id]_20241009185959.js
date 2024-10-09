// import posts from '../../public/posts.json';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// export async function getStaticPaths() {
//   const paths = posts.map(post => ({ params: { id: post.id.toString() } }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const post = posts.find(p => p.id.toString() === params.id);
//   return { props: { post } };
// }

// export default function Post({ post }) {
//   const router = useRouter();

//   return (
//     <>
//       <Head>
//         <title>{post.title}</title>
//         <meta name="description" content={post.content.substring(0, 100)} />
//         <meta property="og:title" content={post.title} />
//         <meta property="og:description" content={post.content.substring(0, 100)} />
//       </Head>

//       <div>
//         <h1>{post.title}</h1>
//         <p>{post.content}</p>
//         <button onClick={() => router.push('/')}>Go back to homepage</button>
//       </div>
//     </>
//   );
// }


import posts from '../../public/posts.json';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Card, CardContent, Button, Typography, Box } from '@mui/material';

export async function getStaticPaths() {
  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.id.toString() === params.id);
  return { props: { post } };
}

export default function Post({ post }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 100)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 100)} />
      </Head>

      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" padding={2}>
        <Card sx={{ maxWidth: 600, width: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="flex-end" padding={2}>
            <Button variant="contained" onClick={() => router.push('/')}>
              Go back to homepage
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}
