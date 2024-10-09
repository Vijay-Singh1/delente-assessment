
import Image from 'next/image';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Link from 'next/link';
import styles from './Product.module.css'; // Import CSS Module
import { useTheme } from '../contexts/theme';


export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return { props: { products } };
}

export default function Products({ products }) {
  const { theme } = useTheme();
  return (
    <div>
      <h1>Products</h1>
      <Box
        display="flex"
        flexDirection="row" // Align items in a row
        flexWrap="wrap" // Allow items to wrap into new rows
        justifyContent="center" // Center items horizontally in each row
        gap={2} // Space between cards
      >
        {products.map(product => (
          <Link href={`/products/${product.id}`} passHref key={product.id}>
            <Card className={styles.card} style={{ cursor: 'pointer', width: '200px', height: '300px' }}>
              <CardMedia>
                <div style={{ height: '200px', position: 'relative' }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill" // Make image fill the container
                    objectFit="contain" // Keep aspect ratio
                  />
                </div>
              </CardMedia>
              <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', padding: '8px' }}>
                <Typography variant="h6" noWrap style={{ marginBottom: '4px', }} sx={{ color: theme === 'light' ? 'white' : 'black' }} >{product.title}</Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginTop: '0' }}>
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </div>
  );
}



