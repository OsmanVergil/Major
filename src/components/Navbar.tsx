import { Button, IconButton, Drawer, Box, Stack, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation().pathname;

  const headers: Record<string, string> = {
    '/': 'Главная',
    '/requests': 'Заявки',
    '/clientCards': 'Карточки клиентов',
    '/autoCards': 'Карточки автомобилей',
    '/clientContracts': 'Договоры с клиентами',
    '/prepaidInvoices': 'Счета на сумму предоплаты',
    '/cashReceipts': 'Кассовые чеки',
    '/contractsOfSale': 'Договоры купли-продажи',
    '/vehiclePassports': 'Паспорта транспортных средств',
    '/invoicesForPayment': 'Счета на сумму оплаты',
    '/goodsReceipts': 'Товарные чеки',
    '/cashOrders': 'Приходные кассовые ордера',
    '/acceptanceCertificates': 'Акты приёма-передачи',
    '/salesReport': 'Создание отчёта по продажам',
    '/clientHistory': 'История взаимодействий с клиентом №48',
    '/clientPage': 'Карточки клиентов',
    '/autoCardPage': 'Карточки автомобилей',
    '/constructor': 'Конструктор комплектаций',
  };

  const headerIcon = (location: string) => {
    switch (location) {
      case '/':
        return <HomeOutlinedIcon sx={{ color: '#363538', transform: 'scale(1.8)', mr: '40px' }} />;
      case '/clientHistory':
        return <CalendarMonthIcon sx={{ color: '#363538', transform: 'scale(1.8)', mr: '40px' }} />;
      case '/constructor':
        return (
          <SettingsOutlinedIcon sx={{ color: '#363538', transform: 'scale(1.8)', mr: '40px' }} />
        );
      case '/salesReport':
        return (
          <ArticleOutlinedIcon sx={{ color: '#363538', transform: 'scale(1.8)', mr: '40px' }} />
        );
        default:
          return <FolderCopyOutlinedIcon sx={{ color: '#363538', transform: 'scale(1.8)', mr: '40px' }} />;

    }
  };

  return (
    <>
      <AppBar sx={{ position: 'static', bgcolor: '#85B575', height: '60px' }}>
        <Toolbar>
          <IconButton
            onClick={() => setShowDrawer(true)}
            edge="start"
            sx={{ transform: 'scale(1.4)', ml: '20px', mr: '80px' }}>
            <MenuIcon sx={{ transform: 'scale(1.2)' }} />
          </IconButton>
          {headerIcon(location)}
          <Typography sx={{ fontSize: '28px', color: 'white', width: '1000px' }}>
            {headers[location]}
          </Typography>
          <Stack direction={'row'} ml={'250px'} alignItems={'center'}>
            <AccountCircleIcon sx={{ color: '#363538', transform: 'scale(1.8)', mr: '6px' }} />
            <Button
              endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
              sx={{ color: 'white', fontSize: '20px', textTransform: 'capitalize' }}>
              Пользователь
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={showDrawer} onClick={() => setShowDrawer(false)}>
        <Box display={'flex'} justifyContent={'flex-end'} bgcolor={'#85B575'} height={60}>
          <IconButton onClick={() => setShowDrawer(false)} size="large">
            <ChevronLeftIcon sx={{ transform: 'scale(2)' }} />
          </IconButton>
        </Box>
        <Stack width={350} height={680} bgcolor={'#d9d9d9'}>
          <Link to="/">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<HomeOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Главная
            </Button>
          </Link>

          <Link to="/requests">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Заявки
            </Button>
          </Link>

          <Link to="/clientCards">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Карточки клиентов
            </Button>
          </Link>
          <Link to="/autoCards">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Карточки автомобилей
            </Button>
          </Link>
          <Link to="/clientContracts">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Договоры с клиентами
            </Button>
          </Link>

          <Link to="/prepaidInvoices">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Счета на сумму предоплаты
            </Button>
          </Link>
          <Link to="/cashReceipts">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Кассовые чеки
            </Button>
          </Link>
          <Link to="/vehiclePassports">
            <Button
              sx={{ color: 'black', fontSize: '17px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Паспорта транспортных средств
            </Button>
          </Link>
          <Link to="/contractsOfSale">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Договоры купли-продажи
            </Button>
          </Link>
          <Link to="/invoicesForPayment">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Счета на сумму оплаты
            </Button>
          </Link>
          <Link to="/goodsReceipts">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Товарные чеки
            </Button>
          </Link>
          <Link to="/cashOrders">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Приходные кассовые ордера
            </Button>
          </Link>
          <Link to="/acceptanceCertificates">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<FolderCopyOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Акты приёма-передачи
            </Button>
          </Link>

          <Link to="/salesReport">
            <Button
              sx={{ color: 'black', fontSize: '18px', textTransform: 'capitalize', ml: '12px' }}
              startIcon={<ArticleOutlinedIcon sx={{ transform: 'scale(1.2)', mr: '10px' }} />}>
              Создание отчёта по продажам
            </Button>
          </Link>
        </Stack>
      </Drawer>
    </>
  );
}
