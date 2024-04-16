import React from 'react';
import Navbar from '../components/Navbar';
import MyTable, { clientHistoryProps } from '../components/MyTable';
import { Button, Divider, Menu, MenuItem, Stack } from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import { Link} from 'react-router-dom';

export default function ClientHistoty() {
  const cols = [
    '№',
    'Дата',
    'Время',
    'Вид взаимодейтвия',
    'Сотрудник',
    '№ заявки',
    '№ договора',
    'Статус',
    'Примечание',
  ];
  const rows: clientHistoryProps[] = [
    {
      number: 4,
      date: '01.03.2024',
      time: '14:00',
      interaction: 'Создан договор',
      employee: 'Фролов Д.Д. (14)',
      requestNumber: 111,
      contractNumber: '58',
      status: 'Ожидание предоплаты',
      remark: '',
    },
    {
      number: 3,
      date: '01.03.2024',
      time: '12:00',
      interaction: 'Создана заявка',
      employee: 'Фролов Д.Д. (14)',
      requestNumber: 111,
      contractNumber: '-',
      status: 'Создана',
      remark: '',
    },
    {
      number: 2,
      date: '02.12.2022',
      time: '13:26',
      interaction: 'Заявка отменена',
      employee: 'Фролов Д.Д. (14)',
      requestNumber: 11,
      contractNumber: '-',
      status: 'Не согласована',
      remark: 'Не устроили условия',
    },
    {
      number: 1,
      date: '02.12.2022',
      time: '12:31',
      interaction: 'Создана заявка',
      employee: 'Фролов Д.Д. (14)',
      requestNumber: 11,
      contractNumber: '-',
      status: 'Создана',
      remark: '',
    },
  ];

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

      <Stack direction={'row'} gap={8} m={'50px 90px'} alignItems={'center'}>
        <Button
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
          sx={{
            height: '46px',
            p: '10px 16px 10px 20px',
            fontSize: '18px',
            backgroundColor: '#e4e4e4',
            color: 'black',
            border: '1px solid black',
            borderRadius: '30px',
            textTransform: 'capitalize',
          }}>
          Создать
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Заявку
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple sx={{ color: 'black' }}>
            Договор
          </MenuItem>
        </Menu>
        <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Удалить
        </MyButton>
        <MyInput width="450px" />

        <Link to="/clientPage">
          <MyButton
            endIcon={<KeyboardReturnOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
            Вернуться в карточку клиента
          </MyButton>
        </Link>
      </Stack>

      <MyTable tableColumns={cols} tableRows={rows} />
    </>
  );
}
