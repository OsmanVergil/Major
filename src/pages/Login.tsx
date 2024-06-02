import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { AuthContext, authContextProps } from '../context/authContext';

export default function Login() {
  const [hidePassord, setHidePassword] = useState(true);
  const { authorize } = useContext(AuthContext) as authContextProps;

  return (
    <Box
      width={570}
      height={420}
      borderRadius={'30px'}
      border={'1px solid black'}
      m={'100px 450px'}>
      <Box
        width={570}
        height={90}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        bgcolor={'#85B575'}
        borderRadius={' 30px 30px 0 0'}
        borderBottom={'1px solid black'}>
        <p style={{ fontSize: '30px', color: 'white', margin: 22 }}>ООО “Мэйджор Авто Центр”</p>
      </Box>
      <Stack
        gap={3}
        sx={{ height: 329, borderRadius: '0 0 30px 30px', backgroundColor: '#f4f4f4' }}
        alignItems={'center'}>
        <Typography fontSize={'20px'} mt={3}>
          Авторизация пользователя
        </Typography>

        <Stack
          direction={'row'}
          gap={3}
          justifyContent={'space-between'}
          alignItems={'center'}
          mb={2}
          width={480}>
          <Typography fontSize={'18px'}>Логин</Typography>
          <input
            type="text"
            style={{
              width: '345px',
              height: '13px',
              padding: '12px 15px',
              border: '1px solid #363538',
              fontSize: '20px',
              backgroundColor: '#e4e4e4',
              outline: 'none',
            }}
          />
        </Stack>

        <Stack
          direction={'row'}
          gap={3}
          justifyContent={'space-between'}
          alignItems={'center'}
          position={'relative'}
          width={480}
          mb={'-20px'}>
          <Typography fontSize={'18px'}>Пароль</Typography>
          <input
            type={hidePassord ? 'password' : 'text'}
            style={{
              width: '345px',
              height: '13px',
              padding: '12px 15px',
              border: '1px solid #363538',
              fontSize: '20px',
              backgroundColor: '#e4e4e4',
              outline: 'none',
            }}
          />
          <IconButton onClick={() => setHidePassword(!hidePassord)} sx={{ position: 'absolute', right: '0px', color: 'gray' }}>
            {hidePassord ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon /> }
          </IconButton>
        </Stack>
        <Typography fontSize={'12px'} color={'#1CA2EE'} mr={'175px'}>
            Забыли пароль?
        </Typography>
        
        <Button
        onClick={authorize}
                sx={{
                  width: '170px',
                  bgcolor: '#85B575',
                  p: '8px 40px',
                  color: 'black',
                  border: '1px solid black',
                  borderRadius: '30px',
                  textTransform: 'capitalize',
                  fontSize: '18px',
                  '&:hover': {
                    bgcolor: '#76A268',
                  },
                }}>
                Войти
              </Button>
      </Stack>
    </Box>
  );
}
