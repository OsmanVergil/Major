import React from 'react';
import MyTable, { CarSale } from '../components/MyTable';
import Navbar from '../components/Navbar';
import { Button, Divider, Menu, MenuItem, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function ClientContracts() {
  const cols = [
    '№',
    'Дата создания',
    'Сотрудник',
    'Клиент',
    'Автомобиль',
    'Стоимость',
    'Заявка',
    'Файл',
    'Статус',
  ];
  const rows: CarSale[] = [
    {
      id: 27,
      dateCreated: '03.03.2024',
      employee: 'Фролов Д.Д. (14)',
      client: 'Беляков А.Н. (48)',
      car: 'Toyota Camry (83)',
      cost: '3085700 руб',
      file: 'Файл',
      request: 111,
      status: 'Ожидание предоплаты',
    },
    {
      id: 26,
      dateCreated: '03.03.2024',
      employee: 'Фролов Д.Д. (14)',
      client: 'Лобанов Д.В. (27)',
      car: 'KIA K5 (46)',
      cost: '2589200 руб',
      file: 'Файл',
      request: 110,
      status: 'Предоплата получена',
    },
    {
      id: 25,
      dateCreated: '03.03.2024',
      employee: 'Фролов Д.Д. (14)',
      client: 'Иванов К.Ю. (32)',
      car: 'Toyota RAV4 (103)',
      cost: '3010800 руб',
      file: 'Файл',
      request: 109,
      status: 'Предоплата получена',
    },
    {
      id: 24,
      dateCreated: '03.03.2024',
      employee: 'Фролов Д.Д. (14)',
      client: 'Симонов В.О. (34)',
      car: 'KIA К5 (45)',
      cost: '2145000 руб',
      file: 'Файл',
      request: 108,
      status: 'Завершён',
    },
    {
      id: 23,
      dateCreated: '02.03.2024',
      employee: 'Фролов Д.Д. (14)',
      client: 'Антонов Г.А. (30)',
      car: 'Toyota Camry (115)',
      cost: '3489300 руб',
      file: 'Файл',
      request: 104,
      status: 'Завершён',
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 70px'} alignItems={'center'}>
        <MyButton>Сформировать</MyButton>
        <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Удалить
        </MyButton>
        <MyButton endIcon={<EditOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Редактировать
        </MyButton>
        <MyButton
          endIcon={<LocalPrintshopOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Распечатать
        </MyButton>
        <MyInput width="250px" />

        <Button
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
          sx={{
            height: '66px',
            width: '200px',
            p: '10px 16px 10px 20px',
            fontSize: '18px',
            backgroundColor: '#e4e4e4',
            color: 'black',
            border: '1px solid black',
            borderRadius: '25px',
            textTransform: 'capitalize',
          }}>
          Создать на основании
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Счёт на сумму предоплаты
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Договор купли-продажи
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Счёт на сумму оплаты
          </MenuItem>
        </Menu>
      </Stack>
      <MyTable tableColumns={cols} tableRows={rows} />
    </>
  );
}
