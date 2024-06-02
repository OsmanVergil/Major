import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MyTable, { cashOrders } from '../components/MyTable'
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function CashOrders() {
    const cols = [
        '№',
        'Дата создания',
        'Сотрудник',
        'Клиент',
        'Договор',
        'Дебет',
        'Кредит',
        'Сумма',
        'Файл'
    ];
    const rows: cashOrders[] = [
        {
            id: 21,
            dateCreated: '03.03.2024',
            employee: 'Белова К.А.',
            client: 'Беляков А.Н.',
            contractNumber: 27,
            debit: '3085700 руб',
            credit: '2700000 руб',
            sum: '2622845 руб',
            file: 'Файл'
        },
        {
            id: 20,
            dateCreated: '03.03.2024',
            employee: 'Белова К.А.',
            client: 'Иванов К.Ю.',
            contractNumber: 25,
            debit: '3010800 руб',
            credit: '2500000 руб',
            sum: '2559180 руб',
            file: 'Файл'
        },
        {
            id: 19,
            dateCreated: '02.03.2024',
            employee: 'Белова К.А.',
            client: 'Симонов В.О.',
            contractNumber: 24,
            debit: '2145000 руб',
            credit: '3489300 руб',
            sum: '1800800 руб',
            file: 'Файл'
        },
        {
            id: 18,
            dateCreated: '22.02.2024',
            employee: 'Белова К.А.',
            client: 'Антонов Г.А.',
            contractNumber: 23,
            debit: '2987000 руб',
            credit: '1823250 руб',
            sum: '2965905 руб',
            file: 'Файл'
        }
    ];
    const [showTable, setShowTable] = useState(false);
    const setShowTrue = () => setShowTable(true)
  return (
    <>
      <Navbar />
      <Stack direction={'row'} gap={4} m={'50px 100px'} alignItems={'center'} mb={'100px'}>
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
      <MyButton style={{position: 'absolute', top: '180px', left: '100px', width: '205px'}}>
        Создать
      </MyButton>
      {showTable && <MyTable tableColumns={cols} tableRows={rows} />}
    </>
  )
}
