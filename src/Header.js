import React from 'react';
import { AppBar, Toolbar, TextField, Button, Box, Avatar } from '@mui/material';
import { deepOrange} from '@mui/material/colors';
 function Header() {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FF6E7F, #BFE9FF)' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField size="small" label="Username" />
          <TextField size="small" label="Password" type="password" />
          <Button variant="contained" color="primary"> Login </Button>
        </Box>
        <Avatar sx={{ bgcolor: deepOrange[500] }} style={{marginleft: 10}}>?</Avatar>
      </Toolbar>
    </AppBar>
  );
}
export default Header;