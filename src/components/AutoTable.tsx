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
  
  export default function AutoTable() {
    const tableCols = [
    'Марка',
    'Модель',
    'Поколение',
    'Комплектация',
    'Кол-во завершённых договоров',
    'Кол-во расторгнутых договоров',
    'Сумма выручки',
  ];
  
    const tableRows = [
      {
        brand: 'Toyota',
        model: 'Camry',
        generation: 8,
        equipment: 'Комфорт',
        resolved: 2,
        rejected: 0,
        sum: '5674900 руб.',
      },
      {
        brand: 'Toyota',
        model: 'RAV4',
        generation: 5,
        equipment: 'Стандарт',
        resolved: 1,
        rejected: 0,
        sum: '2145000 руб.',
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
            width: '1399px',
            height: '36px',
            borderRadius: '0 0 30px 30px',
            bgcolor: '#c0c0c0',
            border: '1px solid black',
            borderTop: 'none',
          }}>
          
        </Stack>
      </>
    );
  }
  