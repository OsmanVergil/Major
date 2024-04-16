import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

export default function ManagerTable() {
  const tableCols = [
    '№ Договора',
    'Дата договора',
    'Заявка',
    'Клиент',
    'Автомобиль',
    'Сумма договора',
    'Статус договора',
  ];

  const tableRows = [
    {
      id: 27,
      date: '03.03.2024',
      invoice: 111,
      client: 'Беляков А.Н. (48)',
      auto: 'Toyota Camry (83)',
      sum: '3085700 руб',
      contractStatus: 'Ожидание предоплаты',
    },
    {
      id: 26,
      date: '03.03.2024',
      invoice: 110,
      client: 'Лобанов Д.В. (27)',
      auto: 'Toyota Camry (115)',
      sum: '2589200 руб',
      contractStatus: 'Создан',
    },
    {
      id: 25,
      date: '03.03.2024',
      invoice: 109,
      client: 'Иванов К.Ю. (32)',
      auto: 'KIA K5 (46)',
      sum: '3010800 руб',
      contractStatus: 'Предоплата получена',
    },
    {
      id: 24,
      date: '02.03.2024',
      invoice: 108,
      client: 'Симонов В.О. (34)',
      auto: 'Toyota RAV4 (103)',
      sum: '2145000 руб',
      contractStatus: 'Предоплата получена',
    },
  ];

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          mt: 3,
          ml: '70px',
          width: '1400px',
          borderRadius: '30px 30px 0 0',
          borderTop: '1px solid black',
        }}>
        <Table>
          <TableHead>
            <TableRow>
              {tableCols.map((col) => (
                <TableCell
                  align="center"
                  sx={{
                    bgcolor: '#c0c0c0',
                    fontSize: '18px',
                    fontWeight: 600,
                    border: '1px solid black',
                    borderTop: 'none',
                  }}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, ind) => (
              <TableRow>
                {Object.values(row).map((value, index) => (
                  <TableCell
                    align="center"
                    sx={{
                      border: '1px solid black',
                      fontSize: '18px',
                      bgcolor: '#f4f4f4',
                    }}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
      direction={'row'}
      justifyContent={'space-between'}
        sx={{
          ml: '70px',
          width: '1359px',
          height: '36px',
          borderRadius: '0 0 30px 30px',
          bgcolor: '#c0c0c0',
          border: '1px solid black',
          borderTop: 'none',
          p: '16px 20px 0 20px',
        }}>
        <Stack direction={'row'} gap={3}>
          <Typography fontSize={'18px'} fontWeight={600}>
            Всего:
          </Typography>
          <Typography fontSize={'18px'} fontWeight={600}>
            4 шт.
          </Typography>
        </Stack>

        <Stack direction={'row'} gap={3}>
          <Typography fontSize={'18px'} fontWeight={600}>
            Завершённых:
          </Typography>
          <Typography fontSize={'18px'} fontWeight={600}>
            0 шт.
          </Typography>
        </Stack>

        <Stack direction={'row'} gap={3}>
          <Typography fontSize={'18px'} fontWeight={600}>
            Расторгнутых:
          </Typography>
          <Typography fontSize={'18px'} fontWeight={600}>
            0 шт.
          </Typography>
        </Stack>

        <Stack direction={'row'} gap={3}>
          <Typography fontSize={'18px'} fontWeight={600}>
            Выручка:
          </Typography>
          <Typography fontSize={'18px'} fontWeight={600}>
            10830700 руб.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
