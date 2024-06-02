import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MyTable, { receiptProps } from '../components/MyTable'
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function CashReceipts() {
    const cols = ['№','Дата создания','Время создания','Сотрудник','Способ расчёта','Счёт на сумму предоплаты','Файл', 'Сумма']
    const rows: receiptProps[] = [
        {
          id: 21,
          date: '03.03.2024',
          time: '15:34',
          employee: 'Белова К.А. (7)',
          paymentMethod: 'наличный',
          invoiceNumber: 22,
          file: 'Файл',
          amount: '462855 руб'
        },
        {
          id: 20,
          date: '03.03.2024',
          time: '12:46',
          employee: 'Белова К.А. (7)',
          paymentMethod: 'безналичный',
          invoiceNumber: 20,
          file: 'Файл',
          amount: '451620 руб'
        },
        {
          id: 19,
          date: '02.03.2024',
          time: '14:32',
          employee: 'Белова К.А. (7)',
          paymentMethod: 'наличный',
          invoiceNumber: 19,
          file: 'Файл',
          amount: '321750 руб'
        },
        {
          id: 18,
          date: '22.02.2024',
          time: '13:02',
          employee: 'Белова К.А. (7)',
          paymentMethod: 'наличный',
          invoiceNumber: 18,
          file: 'Файл',
          amount: '523395 руб'
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
        <MyInput width="420px" />

        
      </Stack>
      <MyButton style={{position: 'absolute', top: '180px', left: '70px', width: '205px'}}>
        Создать
      </MyButton>
      {showTable && <MyTable tableColumns={cols} tableRows={rows} />}
    </>
  )
}
