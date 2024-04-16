import React from 'react';
import Navbar from '../components/Navbar';
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  ToggleButton,
  Typography,
} from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import ManagerTable from '../components/ManagerTable';
import AutoTable from '../components/AutoTable';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

interface sortTypeProps {
  prop: string;
  ord: 'd' | 'a';
}

export default function SalesReport() {
  const [reportType, setReportType] = React.useState<string>('По менеджеру');
  const [sortType, setSortType] = React.useState<sortTypeProps>({
    prop: 'Сумма выручки',
    ord: 'd',
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (repType: string) => {
    setAnchorEl(null);
    setReportType(repType);
  };

  const [anchorElSort, setAnchorElSort] = React.useState<null | HTMLElement>(null);
  const openSort = Boolean(anchorElSort);
  const handleClickSort = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSort(event.currentTarget);
  };
  const handleCloseSort = (sortType: sortTypeProps) => {
    setAnchorElSort(null);
    setSortType(sortType);
  };

  const cols1 = [
    '№ Договора',
    'Заявка',
    '№ паспорта транспортного средства',
    'Комплектация',
    'Дополнительные опции',
    'Дополнительное оборудование',
    'Договор купли-продажи',
    'Дата договора',
    'Клиент',
    'Автомобиль',
    'Сумма договора',
    'Статус договора',
  ];

  const selectedCols1 = [
    '№ Договора',
    'Дата договора',
    'Заявка',
    'Клиент',
    'Автомобиль',
    'Сумма договора',
    'Статус договора',
  ];

  const cols2 = [
    'Марка',
    'Модель',
    'Цена комплектации',
    'Цена дополнительного оборудования',
    'Комплектация',
    'Дополнительные опции',
    'Кол-во завершённых договоров',
    'Кол-во расторгнутых договоров',
    'Дополнительное оборудование',
    'Год выпуска',
    'Поколение',
    'Сумма выручки',
  ];

  const selectedCols2 = [
    'Марка',
    'Модель',
    'Комплектация',
    'Кол-во завершённых договоров',
    'Кол-во расторгнутых договоров',
    'Поколение',
    'Сумма выручки',
  ];

  return (
    <Box height={900}>
      <Navbar />

      <Stack direction={'row'} gap={4} m={'50px 100px'} alignItems={'center'}>
        <MyButton>Сформировать</MyButton>
        <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Удалить
        </MyButton>
        <MyButton endIcon={<FileUploadOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Экспортировать
        </MyButton>
        <MyButton
          endIcon={<LocalPrintshopOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Распечатать
        </MyButton>
        <MyInput width="220px" />
        <MyButton endIcon={<AutoFixHighOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Настроить
        </MyButton>
      </Stack>

      <Stack direction={'row'} justifyContent={'space-between'} m={'0 80px'}>
        <Stack gap={5} mt={5}>
          <Stack direction={'row'} gap={2} alignItems={'center'}>
            <Typography fontSize={'18px'}>Тип отчёта:</Typography>
            <Button
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
              sx={{
                height: '45px',
                width: '300px',
                p: '10px 16px 10px 20px',
                fontSize: '18px',
                backgroundColor: '#e4e4e4',
                color: 'black',
                border: '1px solid black',
                borderRadius: '15px',
                textTransform: 'capitalize',
              }}>
              {reportType === 'По менеджеру' ? 'По менеджеру' : 'По автомобилям'}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem
                onClick={() => handleClose('По менеджеру')}
                disableRipple
                sx={{ color: 'black' }}>
                По менеджеру
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClose('По автомобилям')}
                disableRipple
                sx={{ color: 'black' }}>
                По автомобилям
              </MenuItem>
            </Menu>
          </Stack>

          <Stack direction={'row'} gap={2} alignItems={'center'}>
            {reportType === 'По менеджеру' ? (
              <>
                <Typography fontSize={'18px'}>Менеджер:</Typography>
                <Button
                  endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
                  sx={{
                    height: '45px',
                    width: '300px',
                    p: '10px 16px 10px 20px',
                    fontSize: '18px',
                    backgroundColor: '#e4e4e4',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '15px',
                    textTransform: 'capitalize',
                  }}>
                  Фролов Д.Д.
                </Button>
              </>
            ) : (
              <Stack direction={'row'} gap={2} alignItems={'center'}>
                <Typography fontSize={'18px'}>Марка:</Typography>
                <Button
                  endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
                  sx={{
                    height: '45px',
                    width: '300px',
                    p: '10px 16px 10px 20px',
                    fontSize: '18px',
                    backgroundColor: '#e4e4e4',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '15px',
                    textTransform: 'capitalize',
                    mr: '20px',
                  }}>
                  Toyota
                </Button>

                <Typography fontSize={'18px'}>Модель:</Typography>
                <Button
                  endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
                  sx={{
                    height: '45px',
                    width: '300px',
                    p: '10px 16px 10px 20px',
                    fontSize: '18px',
                    backgroundColor: '#e4e4e4',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '15px',
                    textTransform: 'capitalize',
                  }}>
                  Все
                </Button>
              </Stack>
            )}
          </Stack>

          <Stack direction={'row'} gap={2} alignItems={'center'}>
            <Typography fontSize={'18px'} mr={'10px'}>
              Период:
            </Typography>

            <Typography fontSize={'18px'}>с</Typography>

            <Button
              endIcon={<CalendarMonthIcon sx={{ transform: 'scale(1.5)' }} />}
              sx={{
                height: '45px',
                width: '150px',
                p: '10px 8px 10px 5px',
                fontSize: '18px',
                backgroundColor: '#e4e4e4',
                color: 'black',
                border: '1px solid black',
                borderRadius: '15px',
                textTransform: 'capitalize',
              }}>
              01.03.2024
            </Button>
            <Typography fontSize={'18px'}>по</Typography>
            <Button
              endIcon={<CalendarMonthIcon sx={{ transform: 'scale(1.5)' }} />}
              sx={{
                height: '45px',
                width: '150px',
                p: '10px 8px 10px 5px',
                fontSize: '18px',
                backgroundColor: '#e4e4e4',
                color: 'black',
                border: '1px solid black',
                borderRadius: '15px',
                textTransform: 'capitalize',
              }}>
              04.03.2024
            </Button>
            {reportType === 'По автомобилям' && (
              <>
                <Typography fontSize={'18px'}>Отсортировать по:</Typography>

                <Button
                  onClick={handleClickSort}
                  endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
                  sx={{
                    height: '45px',
                    width: '253px',
                    p: '10px 5px 10px 5px',
                    fontSize: '18px',
                    backgroundColor: '#e4e4e4',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '15px',
                    textTransform: 'capitalize',
                  }}>
                  {sortType.prop}{' '}
                  {sortType.ord === 'd' ? (
                    <KeyboardDoubleArrowDownOutlinedIcon />
                  ) : (
                    <KeyboardDoubleArrowUpOutlinedIcon />
                  )}
                </Button>

                <Menu anchorEl={anchorElSort} open={openSort} onClose={handleCloseSort}>
                  <MenuItem
                    onClick={() => handleCloseSort({ prop: 'Сумма выручки', ord: 'd' })}
                    disableRipple
                    sx={{ color: 'black' }}>
                    Сумма выручки <KeyboardDoubleArrowDownOutlinedIcon />
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => handleCloseSort({ prop: 'Сумма выручки', ord: 'a' })}
                    disableRipple
                    sx={{ color: 'black' }}>
                    Сумма выручки <KeyboardDoubleArrowUpOutlinedIcon />
                  </MenuItem>
                  <Divider />

                  <MenuItem
                    onClick={() => handleCloseSort({ prop: 'Кол-во расторгнутых', ord: 'd' })}
                    disableRipple
                    sx={{ color: 'black' }}>
                    Кол-во расторгнутых <KeyboardDoubleArrowDownOutlinedIcon />
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => handleCloseSort({ prop: 'Кол-во расторгнутых', ord: 'a' })}
                    disableRipple
                    sx={{ color: 'black' }}>
                    Кол-во расторгнутых <KeyboardDoubleArrowUpOutlinedIcon />
                  </MenuItem>
                  <Divider />

                  <MenuItem
                    onClick={() => handleCloseSort({ prop: 'Кол-во завершенных', ord: 'd' })}
                    disableRipple
                    sx={{ color: 'black' }}>
                    Кол-во завершенных <KeyboardDoubleArrowDownOutlinedIcon />
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => handleCloseSort({ prop: 'Кол-во завершенных', ord: 'a' })}
                    disableRipple
                    sx={{ color: 'black' }}>
                    Кол-во завершенных <KeyboardDoubleArrowUpOutlinedIcon />
                  </MenuItem>
                  <Divider />
                </Menu>
              </>
            )}
          </Stack>
        </Stack>

        <Box
          sx={{
            width: '400px',
            height: '300px',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: 'white',
          }}>
          <Stack
            alignItems={'center'}
            sx={{
              width: '400px',
              backgroundColor: '#e4e4e4',
              borderRadius: '10px',
              borderBottom: '1px solid black',
              p: '5px 0',
            }}>
            Отображаемые колонки:
          </Stack>
          <Box sx={{ maxHeight: '260px', overflowY: 'scroll' }}>
            {(reportType === 'По менеджеру' ? cols1 : cols2).map((col) => (
              <Stack direction={'row'} mt={1} alignItems={'center'} ml={1} gap={1}>
                <ToggleButton
                  value="check"
                  selected={selectedCols1.includes(col)}
                  sx={{ width: '25px', height: '25px', border: '1px solid black' }}>
                  {(reportType === 'По менеджеру' ? selectedCols1 : selectedCols2).includes(
                    col,
                  ) && <CheckIcon />}
                </ToggleButton>
                <Typography>{col}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>

      {reportType === 'По менеджеру' ? <ManagerTable /> : <AutoTable />}
    </Box>
  );
}
