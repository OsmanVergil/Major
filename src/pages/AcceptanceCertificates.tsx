import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MyTable, { acceptanceCertificate } from '../components/MyTable';
import { Button, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function AcceptanceCertificates() {
  const cols = [
    '№',
    'Дата создания',
    'Сотрудник',
    'Клиент',
    'Автомобиль ',
    'Договор',
    'Договор купли-продажи',
    'Примечание',
    'Файл',
  ];
  const rows: acceptanceCertificate[] = [
    {
      id: 27,
      dateCreated: '03.03.2024',
      employee: 'Фролов Д.Д.',
      client: 'Беляков А.Н.',
      carModel: 'Toyota Camry',
      contractNumber: 27,
      contractOfSale:27 ,
      remark: '',
      file: 'Файл'
    },
    {
      id: 26,
      dateCreated: '03.03.2024',
      employee: 'Лобанов',
      client: 'Фролов',
      carModel: 'Toyota Camry',
      contractNumber: 26,
      contractOfSale: 26,
      remark: '',
      file: 'Файл'
    },
    {
      id: 25,
      dateCreated: '02.03.2024',
      employee: 'Фролов',
      client: 'Иванов К.Ю.',
      carModel: 'KIA К5',
      contractNumber: 25,
      contractOfSale: 25,
      remark: '',
      file: 'Файл'
    },
    {
      id: 24,
      dateCreated: '02.03.2024',
      employee: 'Фролов',
      client: 'Симонов В.О.',
      carModel: 'Toyota RAV4',
      contractNumber: 24,
      contractOfSale: 24,
      remark: '',
      file: 'Файл'
    },
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
  );
}
