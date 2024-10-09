// export default function ProductDetails({ productId }) {
//     return (
//       <div>
//         <h1>Product Details for ID: {productId}</h1>
//         {/* Mocking product details */}
//         <p>Title: Example Product</p>
//         <p>Description: Example Description</p>
//         <p>Price: $100</p>
//       </div>
//     );
//   }


import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '../contexts/theme';

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setLoading(true);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    padding={2}
    sx={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
  ><CircularProgress /></Box>; 
  }

  if (!product) {
    return <Typography variant="h6">Product not found.</Typography>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={2}
      sx={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
    >
      <Card style={{ maxWidth: 600, width: '100%' }}>
        <CardMedia>
          <div style={{ height: '300px', position: 'relative' }}>
            <Image
              src={product.image}
              alt={product.title}
              layout="fill" // Make the image fill the container
              objectFit="contain" // Keep the image aspect ratio
            />
          </div>
        </CardMedia>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6">
            Price: ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
