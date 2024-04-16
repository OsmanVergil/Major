import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MyTable, { autoCardProps } from '../components/MyTable';
import { Box, Button, Menu, MenuItem, Modal, Stack, Typography } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import DataField from '../components/DataField';

export default function AutoCards() {
  const cols = ['№', 'Марка', 'Модель', 'Поколение', 'Тип двигателя', 'Тип КПП', 'Тип кузова'];

  const [rows, setRows] = useState<autoCardProps[]>([
    {
      number: 83,
      brand: 'Toyota',
      model: 'Camry',
      generation: '8',
      engineType: 'Бензиновый',
      gearbox: 'Автоматическая',
      bodyType: 'Седан',
    },
    {
      number: 82,
      brand: 'KIA',
      model: 'Optima',
      generation: '4 рестайлинг',
      engineType: 'Дизельный',
      gearbox: 'Механическая',
      bodyType: 'Универсал',
    },
    {
      number: 81,
      brand: 'Toyota',
      model: 'Corolla',
      generation: '11 рестайлинг 2',
      engineType: 'Гибрид',
      gearbox: 'Вариатор',
      bodyType: 'Универсал',
    },
    {
      number: 80,
      brand: 'Toyota',
      model: 'Corolla',
      generation: '11 рестайлинг 2',
      engineType: 'Гибрид',
      gearbox: 'Вариатор',
      bodyType: 'Универсал',
    },
    {
      number: 79,
      brand: 'KIA',
      model: 'Ceed',
      generation: '3 рестайлинг',
      engineType: 'Бензиновый',
      gearbox: 'Робот',
      bodyType: 'Пятидверный хэтчбек',
    },
  ]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const handleOpenModalCreate = () => setOpenModalCreate(true);
  const handleCloseModalCreate = () => setOpenModalCreate(false);

  const [brand, setbrand] = useState('');
  const [model, setmodel] = useState('');
  const [generation, setgeneration] = useState('');
  const [engineType, setengineType] = useState('');
  const [gearbox, setGearbox] = useState('');
  const [bodyType, setBodyType] = useState('');

  const createAutoCard = () => {
    if (brand && model && generation && engineType && gearbox && bodyType) {
      setRows([
        { number: rows[0].number + 1, brand, model, generation, engineType, gearbox, bodyType },
        ...rows,
      ]);
      setbrand('');
      setmodel('');
      setgeneration('');
      setengineType('');
      setGearbox('');
      setBodyType('');
      handleCloseModalCreate();
    }
  };

  const [selected, setSelected] = React.useState(new Array(rows.length).fill(false));
  const deleteRows = () => {
    const elementsToDelete = selected.map((el, ind) => (el ? ind : -1));
    setRows(rows.filter((el, ind) => !elementsToDelete.includes(ind)));
    setSelected(new Array(rows.length).fill(false));
  };

  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 90px'} alignItems={'center'}>
        <MyButton onClick={handleOpenModalCreate}>Создать</MyButton>
        <Modal open={openModalCreate} onClose={handleCloseModalCreate}>
          <Stack
            width={610}
            height={670}
            gap={1}
            bgcolor={'#f4f4f4'}
            borderRadius={'30px'}
            sx={{ position: 'absolute', top: '10px', left: '440px', border: '1px solid black' }}>
            <Box
              width={610}
              height={80}
              display={'flex'}
              alignContent={'center'}
              justifyContent={'center'}
              bgcolor={'#85B575'}
              borderRadius={' 30px 30px 0 0'}
              borderBottom={'1px solid black'}
              m={''}>
              <p style={{ fontSize: '28px', color: 'white', margin: 22 }}>Создать карточку автомобиля</p>
            </Box>

            <Stack p={3} gap={4}>
              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Марка:</Typography>
                <DataField value={brand} setValue={setbrand} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Модель:</Typography>
                <DataField value={model} setValue={setmodel} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Поколение:</Typography>
                <DataField value={generation} setValue={setgeneration} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Тип двигателя:</Typography>
                <DataField value={engineType} setValue={setengineType} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Тип КПП:</Typography>
                <DataField value={gearbox} setValue={setGearbox} />
              </Stack>

              {/* <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Тип КПП:</Typography>
                <DataField value={gearbox} setValue={setGearbox} />
              </Stack> */}

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Тип кузова:</Typography>
                <DataField value={bodyType} setValue={setBodyType} />
              </Stack>

              

              <Button
                onClick={createAutoCard}
                sx={{
                  width: '170px',
                  bgcolor: '#85B575',
                  p: '8px 40px',
                  color: 'black',
                  border: '1px solid black',
                  borderRadius: '30px',
                  ml: '196px',
                  mt: '10px',
                  textTransform: 'capitalize',
                  fontWeight: 600,
                  fontSize: '18px',
                  '&:hover': {
                    bgcolor: '#76A268',
                  },
                }}>
                Создать
              </Button>
            </Stack>
          </Stack>
        </Modal>

        <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />} onClick={deleteRows}>
          Удалить
        </MyButton>
        <Link to="/autoCardPage">
          <MyButton endIcon={<EditOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
            Редактировать
          </MyButton>
        </Link>

        <MyInput width="450px" value={searchValue} setValue={setSearchValue}/>

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
            Паспорт ТС
          </MenuItem>
        </Menu>
      </Stack>
      {rows.length ? <MyTable
        tableColumns={cols}
        tableRows={rows}
        selectedElements={selected}
        setSelectedElements={setSelected}
        searchValue={searchValue}
      /> : <Typography variant='h1' textAlign={'center'}> Нет данных
        </Typography>}
      
    </>
  );
}
