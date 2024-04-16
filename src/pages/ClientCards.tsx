import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MyTable, { clientCardProps } from '../components/MyTable';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import {
  Box,
  Button,
  Modal,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import DataField from '../components/DataField';

export default function ClientCards() {
  const cols = [
    '№',
    'Фамилия',
    'Имя',
    'Отчество',
    'Дата рождения',
    'Пол',
    'Номер телефона',
    'Примечание',
  ];
  const [rows, setRows] = useState<clientCardProps[]>([
    {
      number: 49,
      secondName: 'Гончаров',
      firstName: 'Роман',
      patronymic: 'Матвеевич',
      birthDate: '04.06.1987',
      sex: 'М',
      telNumber: '+7(916)1112233',
      remark: 'Звонить с 14:00 до 19:00',
    },
    {
      number: 48,
      secondName: 'Беляков',
      firstName: 'Андрей',
      patronymic: 'Николаевич',
      birthDate: '03.12.1999',
      sex: 'М',
      telNumber: '+7(916)1115533',
      remark: 'Звонить с 12:00 до 22:00',
    },
    {
      number: 47,
      secondName: 'Гончаревич',
      firstName: 'Андрей',
      patronymic: 'Андреевич',
      birthDate: '03.11.1995',
      sex: 'М',
      telNumber: '+7(916)5565533',
      remark: 'Звонить с 12:00 до 20:00',
    },
    {
      number: 46,
      secondName: 'Алексеева',
      firstName: 'Елизавета',
      patronymic: 'Дмитриевна',
      birthDate: '07.03.1991',
      sex: 'Ж',
      telNumber: '+7(916)5565483',
      remark: 'Звонить с 12:00 до 20:00',
    },
    {
      number: 45,
      secondName: 'Степанов',
      firstName: 'Артем',
      patronymic: 'Павлович',
      birthDate: '17.12.2002',
      sex: 'М',
      telNumber: '+7(916)5566663',
      remark: 'Звонить с 12:00 до 20:00',
    },
  ]);

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const handleOpenModalCreate = () => setOpenModalCreate(true);
  const handleCloseModalCreate = () => setOpenModalCreate(false);

  const [secondName, setsecondName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [patronymic, setpatronymic] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [sex, setsex] = useState<'М' | 'Ж' | undefined>();
  const [telNumber, settelNumber] = useState('+7');
  const [remark, setremark] = useState('');

  const handleSexChange = (event: React.MouseEvent<HTMLElement>, newSex: 'М' | 'Ж') => {
    setsex(newSex);
  };

  const createClientCard = () => {
    if (secondName && firstName && patronymic && birthDate && sex && telNumber) {
      console.log({
        number: rows[0].number + 1,
        secondName,
        firstName,
        patronymic,
        birthDate,
        sex,
        telNumber,
        remark,
      });

      setRows([
        {
          number: rows[0].number + 1,
          secondName,
          firstName,
          patronymic,
          birthDate,
          sex,
          telNumber,
          remark,
        },
        ...rows,
      ]);
      setsecondName('');
      setfirstName('');
      setpatronymic('');
      setbirthDate('');
      setsex(undefined);
      settelNumber('+7');
      handleCloseModalCreate();
    }
    console.log(rows);
  };

  const [selected, setSelected] = React.useState(new Array(rows.length).fill(false));
  const deleteRows = () => {
    const elementsToDelete = selected.map((el, ind) => (el ? ind : -1));
    console.log(elementsToDelete);

    setRows(rows.filter((el, ind) => !elementsToDelete.includes(ind)));
    setSelected(new Array(rows.length).fill(false));
  };

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Navbar />
      <Stack direction={'row'} gap={4} m={'50px 70px'}>
        <MyButton onClick={handleOpenModalCreate}>Создать</MyButton>
        <Modal open={openModalCreate} onClose={handleCloseModalCreate}>
          <Stack
            width={650}
            height={730}
            gap={1}
            bgcolor={'#f4f4f4'}
            borderRadius={'30px'}
            sx={{ position: 'absolute', top: '0px', left: '440px', border: '1px solid black' }}>
            <Box
              width={650}
              height={80}
              display={'flex'}
              alignContent={'center'}
              justifyContent={'center'}
              bgcolor={'#85B575'}
              borderRadius={' 30px 30px 0 0'}
              borderBottom={'1px solid black'}
              m={''}>
              <p style={{ fontSize: '28px', color: 'white', margin: 22 }}>
                Создать карточку клиента
              </p>
            </Box>

            <Stack p={3} gap={4}>
              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Фамилия:</Typography>
                <DataField value={secondName} setValue={setsecondName} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Имя:</Typography>
                <DataField value={firstName} setValue={setfirstName} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Отчество:</Typography>
                <DataField value={patronymic} setValue={setpatronymic} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Дата рождения:</Typography>
                <DataField value={birthDate} setValue={setbirthDate} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Пол:</Typography>
                <ToggleButtonGroup
                  value={sex}
                  onChange={handleSexChange}
                  exclusive
                  sx={{
                    bgcolor: '#e4e4e4',
                    border: '1px solid black',
                    fontSize: '18px',
                  }}>
                  <ToggleButton value="М">М</ToggleButton>
                  <ToggleButton value="Ж">Ж</ToggleButton>
                </ToggleButtonGroup>
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Номер телефона:</Typography>
                <DataField value={telNumber} setValue={settelNumber} />
              </Stack>

              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography fontSize={'18px'}>Примечание (опц):</Typography>
                <DataField value={remark} setValue={setremark} />
              </Stack>

              <Button
                onClick={createClientCard}
                sx={{
                  width: '170px',
                  bgcolor: '#85B575',
                  p: '8px 40px',
                  color: 'black',
                  border: '1px solid black',
                  borderRadius: '30px',
                  ml: '216px',
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

        <MyButton
          endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}
          onClick={deleteRows}>
          Удалить
        </MyButton>
        <Link to="/clientPage">
          <MyButton endIcon={<EditOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
            Редактировать
          </MyButton>
        </Link>

        <MyInput width="300px" value={searchValue} setValue={setSearchValue} />
        <Link to="/clientHistory">
          <MyButton endIcon={<CalendarMonthIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
            История взаимодейтвия с клиентом
          </MyButton>
        </Link>
      </Stack>

      {rows.length ? (
        <MyTable
          tableColumns={cols}
          tableRows={rows}
          selectedElements={selected}
          setSelectedElements={setSelected}
          searchValue={searchValue}
        />
      ) : (
        <Typography variant="h1" textAlign={'center'}>
          {' '}
          Нет данных
        </Typography>
      )}
    </>
  );
}
