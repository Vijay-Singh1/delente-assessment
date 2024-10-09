import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export default function Custom404() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Image 
        src="/not-found.png" // Path to your image
        alt="Page Not Found"
        width={500} // Set the desired width
        height={300} // Set the desired height
        style={{ objectFit: 'contain' }} // Maintain aspect ratio
      />
      <Typography variant="h4" sx={{ mt: 2 }}>
        404 - Page Not Found
      </Typography>
    </Box>
  );
}
