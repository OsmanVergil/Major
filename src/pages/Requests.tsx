import { Box, Button, Divider, Menu, MenuItem, Modal, Stack, Typography } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import MyTable, { requestsProps } from '../components/MyTable';
import Navbar from '../components/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react';
import DataField from '../components/DataField';

export default function Requests() {
  const cols = ['№', 'Дата создания', 'Клиент', 'Автомобиль', 'Скан', 'Статус'];
  const [showTable, setShowTable] = useState(false);
  const setShowTrue = () => setShowTable(true)
  const [rows, setRows] = useState<requestsProps[]>([
    {
      number: 111,
      creationDate: '01.03.2024',
      client: 'Беляков А.Н. (48)',
      auto: 'Toyota Camry (83)',
      file: 'Файл',
      status: 'Создана',
    },
    {
      number: 110,
      creationDate: '01.03.2024',
      client: 'Лобанов Д.В. (27)',
      auto: 'Toyota Camry (115)',
      file: 'Файл',
      status: 'Ожидает согласования',
    },
    {
      number: 109,
      creationDate: '01.03.2024',
      client: 'Иванов К.Ю. (32)',
      auto: 'KIA K5 (46)',
      file: 'Файл',
      status: 'Согласована',
    },
    {
      number: 108,
      creationDate: '29.02.2024',
      client: 'Симонов В.О. (34)',
      auto: 'Toyota RAV4 (103)',
      file: 'Файл',
      status: 'Создан договор',
    },
    {
      number: 107,
      creationDate: '29.02.2024',
      client: 'Антонова Л.Ю. (56)',
      auto: 'Toyota Camry (123)',
      file: 'Файл',
      status: 'Не согласована',
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

  

  return (
    <>
      <Navbar />
      <Stack direction={'row'} gap={4} m={'50px 70px'} alignItems={'center'} mb={'100px'}>
        <MyButton
        onClick={setShowTrue}
          // endIcon={<DriveFolderUploadOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}
          >
          Сформировать
        </MyButton>
        <MyButton
          endIcon={
            <DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />
          }>
          Удалить
        </MyButton>
        <MyButton
          endIcon={<EditOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Редактировать
        </MyButton>
        

        <MyInput width="450px" />

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
            Договор
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Карточка клиента
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Карточка автомобиля
          </MenuItem>
        </Menu>
      </Stack>
      <MyButton style={{position: 'absolute', top: '190px', left: '70px', width: '205px'}}>
        Создать
      </MyButton>
      {showTable && <MyTable tableColumns={cols} tableRows={rows}/>}
    </>
  );
}
