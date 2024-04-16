import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, Divider, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MyButton from '../components/MyButton';
import { Link } from 'react-router-dom';
import EditableField from '../components/EditableField';

export default function ClientPage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (sex: string) => {
    setAnchorEl(null);
    setSex(sex);
  };

  const [sex, setSex] = React.useState('Мужской');

  return (
    <>
      <Navbar />
      <Box m={'30px 60px'}>
        <Stack direction={'row'} gap={12} alignItems={'center'} mb={'40px'}>
          <Typography variant="h4">Клиент №48</Typography>
          <Typography variant="h4">(Беляков Андрей Николаевич)</Typography>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} mb={'30px'}>
          <Stack direction={'row'} gap={8}>
            <MyButton endIcon={<SaveAltOutlinedIcon sx={{ transform: 'scale(1.5)' }} />}>
              Сохранить
            </MyButton>
            <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
              Удалить
            </MyButton>
          </Stack>
          <Link to="/clientHistory">
            <MyButton endIcon={<CalendarMonthIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
              История взаимодейтвия с клиентом
            </MyButton>
          </Link>
        </Stack>
        <Box
          sx={{
            width: '100%',
            height: '500px',
            border: '1px solid black',
            borderRadius: '30px',
            backgroundColor: '#c0c0c0',
          }}>
          <Box p={'18px 28px'}>
            <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
              Персональные данные клиента
            </Typography>
            <Stack direction={'row'} gap={3} mb={'20px'}>
              <EditableField width="440px" defaultValue={'Беляков'} />
              <EditableField width="440px" defaultValue={'Андрей'} />
              <EditableField width="440px" defaultValue={'Николаевич'} />
            </Stack>
            <Typography fontSize={'18px'} mb={'10px'}>
              Дата рождения:
            </Typography>
            <Stack direction={'row'} gap={6} mb={'20px'}>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{
                  width: '160px',
                  height: '45px',
                  padding: '0 10px',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  border: '1px solid black',
                  borderRadius: '15px',
                }}>
                <Typography fontSize={'18px'}>08.12.2002</Typography>
                <IconButton>
                  <EditCalendarOutlinedIcon sx={{ color: 'black', transform: 'scale(1.2)' }} />
                </IconButton>
              </Stack>

              <Button
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
                sx={{
                  height: '45px',
                  width: '200px',
                  p: '10px 16px 10px 20px',
                  fontSize: '18px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: '1px solid black',
                  borderRadius: '15px',
                  textTransform: 'capitalize',
                }}>
                {sex === 'Мужской' ? 'Муж.' : 'Жен.'}
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                  onClick={() => handleClose('Мужской')}
                  disableRipple
                  sx={{ color: 'black', width: '170px' }}>
                  Мужской
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => handleClose('Женский')}
                  disableRipple
                  sx={{ color: 'black' }}>
                  Женский
                </MenuItem>
              </Menu>
            </Stack>
            <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
              Данные паспорта
            </Typography>
            <Stack direction={'row'} gap={3} mb={'15px'}>
              <EditableField width="340px" defaultValue={'4545454545'} passport={true} />
              <Stack direction={'row'} gap={1} alignItems={'center'}>
                <Typography>Дата выдачи:</Typography>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    width: '160px',
                    height: '45px',
                    padding: '0 10px',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    borderRadius: '15px',
                  }}>
                  <Typography fontSize={'18px'}>08.12.2002</Typography>
                  <IconButton>
                    <EditCalendarOutlinedIcon sx={{ color: 'black', transform: 'scale(1.2)' }} />
                  </IconButton>
                </Stack>
              </Stack>
              <EditableField width="310px" defaultValue={'451'} />
              <EditableField width="310px" defaultValue={'456 456'} />
            </Stack>
            <Stack direction={'row'} gap={7} mb={'10px'}>
              <EditableField width="634px" defaultValue={'ГУ МВД РОСИИ'} />
              <EditableField width="634px" defaultValue={'г. Москва ул. Арбат д. 41'} />
            </Stack>
            <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
            Контактная информация
            </Typography>
            <Stack direction={'row'} gap={7} mb={'10px'}>
              <EditableField width="634px" defaultValue={'+7(916)1115533'} />
              <EditableField width="634px" defaultValue={'ban@mail.com'} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
