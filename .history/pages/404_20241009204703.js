import Image from 'next/image';
import { Box } from '@mui/material';

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
        src="/404-status-code.png" // Path to your image
        alt="Page Not Found"
        width={1000} // Set the desired width
        height={500} // Set the desired height
        style={{ objectFit: 'contain' }} // Maintain aspect ratio
      />
      
    </Box>
  );
}
