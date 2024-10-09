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

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <CircularProgress />; // Loading spinner
  }

  if (!product) {
    return <Typography variant="h6">Product not found.</Typography>; // Handle case where product is not found
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={2}
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
