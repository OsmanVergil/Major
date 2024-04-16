import React from 'react';
import Navbar from '../components/Navbar';
import MyTable, { prepaidInvoicesProps } from '../components/MyTable';
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function PrepaidInvoices() {
  const cols = [
    '№',
    'Дата создания',
    'Сотрудник',
    'Клиент',
    'Договор',
    'Кассовый чек',
    'Файл',
    'Сумма',
  ];
  const rows: prepaidInvoicesProps[] = [
    {
      id: 22,
      date_created: '03.03.2024',
      employee: 'Фролов Д.Д.',
      client: 'Беляков А.Н.',
      contract: 27,
      cash_receipt: '21',
      file: 'Файл',
      sum: '462855 руб.',
    },
    {
      id: 21,
      date_created: '03.03.2024',
      employee: 'фролов Д.Д.',
      client: 'Лобанов Д.В.',
      contract: 26,
      cash_receipt: '20',
      file: 'Файл',
      sum: '388380 руб.',
    },
    {
      id: 20,
      date_created: '03.03.2024',
      employee: 'фролов д.Д.',
      client: 'Иванов К.Ю.',
      contract: 25,
      cash_receipt: '19',
      file: 'Файл',
      sum: '451620 руб.',
    },
    {
      id: 19,
      date_created: '02.03.2024',
      employee: 'Фролов Д.Д.',
      client: 'Симонов В.О.',
      contract: 24,
      cash_receipt: '18',
      file: 'Файл',
      sum: '321750 руб.',
    },
    {
      id: 18,
      date_created: '22.02.2024',
      employee: 'фролов Д.Д.',
      client: 'Антонов Г.А.',
      contract: 23,
      cash_receipt: '-',
      file: 'Файл',
      sum: '523395 руб.',
    },
  ];

  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 90px'} alignItems={'center'}>
        <MyButton>Создать</MyButton>
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
          Создать кассовый чек
        </Button>
      </Stack>

      <MyTable tableColumns={cols} tableRows={rows} />
    </>
  );
}
