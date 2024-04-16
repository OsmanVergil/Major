import { Box, Stack, Typography, List, ListItem, ListItemText } from '@mui/material';

import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Navbar from '../components/Navbar';

export default function Main() {
  return (
    <>
      <Navbar />
      <Stack direction={'row'} gap={4} m={'80px 240px'}>
        <Box width={470} height={450} borderRadius={'30px'} border={'1px solid black'}>
          <Box
            width={470}
            height={80}
            display={'flex'}
            alignContent={'center'}
            justifyContent={'center'}
            bgcolor={'#85B575'}
            borderRadius={' 30px 30px 0 0'}
            borderBottom={'1px solid black'}>
            <p style={{ fontSize: '28px', color: 'white', margin: 22 }}>Уведомления</p>
          </Box>
          <Box sx={{height: 369, borderRadius: '0 0 30px 30px', backgroundColor: '#f4f4f4'}}>
          <List>
            <ListItem>
              <NotificationAddIcon sx={{ mr: '12px' }} />
              <ListItemText
                primary="Получена предоплата по Договору №106 "
                primaryTypographyProps={{ fontSize: '20px' }}
              />
            </ListItem>
            <ListItem>
              <NotificationAddIcon sx={{ mr: '12px' }} />
              <ListItemText
                primary="Заявка №52 ожидает согласования "
                primaryTypographyProps={{ fontSize: '20px' }}
              />
            </ListItem>
            <ListItem>
              <NotificationAddIcon sx={{ mr: '12px' }} />
              <ListItemText
                primary="Получена оплата по Договору №85  "
                primaryTypographyProps={{ fontSize: '20px' }}
              />
            </ListItem>
            <ListItem>
              <NotificationAddIcon sx={{ mr: '12px' }} />
              <ListItemText
                primary="Создана Заявка №44"
                primaryTypographyProps={{ fontSize: '20px' }}
              />
            </ListItem>
            <ListItem>
              <NotificationAddIcon sx={{ mr: '12px' }} />
              <ListItemText
                primary="Договор № 48 расторгнут "
                primaryTypographyProps={{ fontSize: '20px' }}
              />
            </ListItem>
          </List>
          </Box>
          
        </Box>

        <Box width={470} height={450} borderRadius={'30px'} border={'1px solid black'}>
          <Box
            width={470}
            height={80}
            display={'flex'}
            alignContent={'center'}
            justifyContent={'center'}
            bgcolor={'#85B575'}
            borderRadius={' 30px 30px 0 0'}
            borderBottom={'1px solid black'}>
            <p style={{ fontSize: '28px', color: 'white', margin: 22 }}>Информация по договорам</p>
          </Box>
          <Box sx={{height: 369, borderRadius: '0 0 30px 30px', backgroundColor: '#f4f4f4'}}>
          <List>
            <ListItem>
              <ListItemText
                primary="Кол-во договоров со статусом ожидание предоплаты: 4 "
                primaryTypographyProps={{ fontSize: '16px' }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Кол-во договоров со статусом предоплата получена: 6 "
                primaryTypographyProps={{ fontSize: '16px' }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Кол-во договоров со статусом ожидание оплаты: 11  "
                primaryTypographyProps={{ fontSize: '16px' }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Кол-во договоров со статусом оплата получена: 3"
                primaryTypographyProps={{ fontSize: '16px' }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Всего активных договоров: 31 "
                primaryTypographyProps={{ fontSize: '16px' }}
              />
            </ListItem>
          </List>
          </Box>
          
        </Box>
      </Stack>
    </>
  );
}
