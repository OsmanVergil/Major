import React from 'react'
import Navbar from '../components/Navbar'
import MyTable, { Deal } from '../components/MyTable'
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function ContractsOfSale() {
    const cols = ['№','Дата создания','Сотрудник','Клиент','Автомобиль','Сумма сделки','Адрес', 'Договор', 'Файл', ]

    const rows: Deal[] = [
        {
          id: 27,
          dateCreated: '03.03.2024',
          employee: 'Фролов',
          client: 'Фролов Д.Д. (14)',
          car: 'Toyota Camry (83)',
          dealAmount: '3085700 руб',
          address: 'г. Красногорск, км 25, ком. 67',
          contractNumber: 27,
          file: 'Файл'
        },
        {
          id: 26,
          dateCreated: '03.03.2024',
          employee: 'Беляков А.Н. (48)',
          client: 'Лобанов Д.В. (27)',
          car: 'Toyota Camry (115)',
          dealAmount: '2589200 руб',
          address: 'г. Красногорск, км 25, ком. 67',
          contractNumber: 26,
          file: 'Файл'
        },
        {
          id: 25,
          dateCreated: '02.03.2024',
          employee: 'Фролов',
          client: 'Фролов Д.Д. (14)',
          car: 'KIA К5 (46)',
          dealAmount: '3010800 руб',
          address: 'г. Красногорск, км 25, ком. 67',
          contractNumber: 25,
          file: 'Файл'
        },
        {
          id: 24,
          dateCreated: '02.03.2024',
          employee: 'Фролов д.Д. (14)',
          client: 'Иванов К.Ю. (32)',
          car: 'Toyota RAV4 (103)',
          dealAmount: '2145000 руб',
          address: 'г. Красногорск, км 25, ком. 67',
          contractNumber: 24,
          file: 'Файл'
        }
      ];

  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 65px'} alignItems={'center'}>
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
               Создать акт приема-передачи
        </Button>
      </Stack>

      <MyTable tableColumns={cols} tableRows={rows} />
    </>
  )
}
