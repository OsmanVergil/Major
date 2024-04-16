import React from 'react'
import Navbar from '../components/Navbar'
import MyTable, { goodsReceipt } from '../components/MyTable'
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function GoodsReceipts() {
    const cols = ['№', 'Дата создания', 'Время создания', 'Сотрудник', 'Автомобиль', 'Счёт на сумму оплаты', 'Файл','Сумма счета'];
    const rows: goodsReceipt[] = [
        {
          id: 21,
          dateCreated: '03.03.2024',
          time: '16:34',
          employee: 'Белова К.А. (7)',
          carModel: 'Toyota Camry (83)',
          invoiceForPayment: 22,
          file: 'Файл',
          invoiceAmount: '2622845 руб',
        },
        {
          id: 20,
          dateCreated: '03.03.2024',
          time: '13:46',
          employee: 'Белова К.А. (7)',
          carModel: 'Toyota Camry (115)',
          invoiceForPayment: 20,
          file: 'Файл',
          invoiceAmount: '2559180 руб',
        },
        {
          id: 19,
          dateCreated: '02.03.2024',
          time: '15:32',
          employee: 'Белова К.А. (7)',
          carModel: 'KIA K5 (46)',
          invoiceForPayment: 19,
          file: 'Файл',
          invoiceAmount: '1823250 руб',
        },
        {
          id: 18,
          dateCreated: '22.02.2024',
          time: '14:02',
          employee: 'Белова К.А. (7)',
          carModel: 'Toyota RAV4 (103)',
          invoiceForPayment: 18,
          file: 'Файл',
          invoiceAmount: '2965905 руб',
        }
      ]

  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 100px'} alignItems={'center'}>
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
        <MyInput width="420px" />

        
      </Stack>
      <MyTable tableColumns={cols} tableRows={rows} />
    </>
  )
}
