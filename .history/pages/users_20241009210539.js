

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { parseCookies } from 'nookies';
export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const theme = cookies.theme ;

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
 

  return { props: { users, theme } };
}

export default function Users({ users, theme }) {

  return (
    <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
      <Typography variant="h3" gutterBottom  color= {theme === 'light' ? '#0972D3' : 'black'} >
        User List
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">Phone</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
