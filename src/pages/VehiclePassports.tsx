import React from 'react'
import Navbar from '../components/Navbar'
import MyTable, { vehiclePasportProps } from '../components/MyTable'
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function VehiclePassports() {
    const cols = [
        '№',
        'Дата выдачи',
        'Клиент',
        'Автомобиль',
        'Где выдан',
        'Кем выдан',
        'Файл'
    ];

    const rows: vehiclePasportProps[] = [{
        id: 83,
        issueDate: '06.03.2024',
        client: 48,
        auto: 83,
        issueLocation: 'г. Владивосток, ул. Посьетская, 21А',
        issueAgency: 'Владивостокская таможня ВАТ т/п',
        file: 'Файл',
      },
      {
        id: 115,
        issueDate: '06.03.2024',
        client: 27,
        auto: 115,
        issueLocation: 'г. Владивосток, ул. Посьетская, 21А',
        issueAgency: 'Владивостокская таможня ВАТ т/п',
        file: 'Файл',
      },
      {
        id: 46,
        issueDate: '05.03.2024',
        client: 32,
        auto: 46,
        issueLocation: 'г. Калининград, ул. Магнитогорская, 4 ',
        issueAgency: 'КИА Моторс Россия',
        file: 'Файл',
      },
      {
        id: 103,
        issueDate: '25.02.2024',
        client: 34,
        auto: 103,
        issueLocation: 'г. Владивосток, ул. Посьетская, 21А',
        issueAgency: 'Владивостокская таможня ВАТ т/п',
        file: 'Файл',
      },
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
