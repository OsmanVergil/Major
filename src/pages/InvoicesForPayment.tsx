import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MyTable, { invoiceForPayment } from '../components/MyTable'
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function InvoicesForPayment() {
    const cols = ['№', 'Дата создания', 'Сотрудник', 'Клиент', 'Номер договора', 'Номер товарного чека', 'Файл', 'Сумма'];
    const rows: invoiceForPayment[] = [
        {
          id: 22,
          dateCreated: '03.03.2024',
          employee: 'Фролов Д.Д.',
          client: 'Беляков А.Н.',
          contractNumber: 27,
          invoiceNumber: '21',
          file: 'Файл',
          sum: '2622845 руб'
        },
        {
          id: 21,
          dateCreated: '03.03.2024',
          employee: 'Фролов Д.Д.',
          client: 'Лобанов Д.В.',
          contractNumber: 26,
          invoiceNumber: '-',
          file: 'Файл',
          sum: '2200820 руб'
        },
        {
          id: 20,
          dateCreated: '03.03.2024',
          employee: 'Фролов Д.Д.',
          client: 'Иванов К.Ю.',
          contractNumber: 25,
          invoiceNumber: '20',
          file: 'Файл',
          sum: '2559180 руб'
        },
        {
          id: 19,
          dateCreated: '02.03.2024',
          employee: 'Фролов Д.Д.',
          client: 'Симонов В.О.',
          contractNumber: 24,
          invoiceNumber: '19',
          file: 'Файл',
          sum: '1823250 руб'
        },
        {
          id: 18,
          dateCreated: '22.02.2024',
          employee: 'Фролов Д.Д.',
          client: 'Антонов Г.А.',
          contractNumber: 23,
          invoiceNumber: '18',
          file: 'Файл',
          sum: '2965905 руб'
        }
      ];
      const [showTable, setShowTable] = useState(false);
      const setShowTrue = () => setShowTable(true)
  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 70px'} alignItems={'center'} mb={'100px'}>
        <MyButton onClick={setShowTrue}>Сформировать</MyButton>
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
          Создать товарный чек
        </Button>
      </Stack>
      <MyButton style={{position: 'absolute', top: '180px', left: '70px', width: '205px'}}>
        Создать
      </MyButton>
      {showTable && <MyTable tableColumns={cols} tableRows={rows} />}
    </>
  )
}
