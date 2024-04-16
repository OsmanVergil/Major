import React, { useMemo } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export interface requestsProps {
  number: number;
  creationDate: string;
  client: string;
  auto: string;
  file: string;
  status: string;
}

export interface clientCardProps {
  number: number;
  secondName: string;
  firstName: string;
  patronymic: string;
  birthDate: string;
  sex: 'М' | 'Ж' | undefined;
  telNumber: string;
  remark: string;
}

export interface autoCardProps {
  number: number;
  brand: string;
  model: string;
  generation: string;
  engineType: string;
  gearbox: string;
  bodyType: string;
}

export interface clientHistoryProps {
  number: number;
  date: string;
  time: string;
  interaction: string;
  employee: string;
  requestNumber: number;
  contractNumber: string;
  status: string;
  remark: string;
}

export interface prepaidInvoicesProps {
  id: number;
  date_created: string;
  employee: string;
  client: string;
  contract: number;
  cash_receipt: string;
  file: string;
  sum: string;
}

export interface CarSale {
  id: number;
  dateCreated: string;
  employee: string;
  client: string;
  car: string;
  cost: string;
  file: string;
  request: number;
  status: string;
}

export interface receiptProps {
  id: number;
  date: string; // Формат даты YYYY-MM-DD
  time: string; // Формат времени HH:MM
  employee: string; // ФИО сотрудника
  paymentMethod: 'наличный' | 'безналичный';
  invoiceNumber: number;
  file: string;
  amount: string;
}

export interface vehiclePasportProps {
  id: number;
  issueDate: string;
  client: number;
  auto: number;
  issueLocation: string;
  issueAgency: string;
  file: string;
}

export interface Deal {
  id: number; // Добавляем новое поле id
  dateCreated: string; // Дата создания
  employee: string; // Сотрудник
  client: string; // Клиент
  car: string; // Автомобиль
  dealAmount: string; // Сумма сделки
  address: string; // Адрес
  contractNumber: number; // Номер договора
  file: string; // Файл
}

export interface invoiceForPayment {
  id: number;
  dateCreated: string; // Тип изменен с Date на string
  employee: string;
  client: string;
  contractNumber: number;
  invoiceNumber: string;
  file: string;
  sum: string;
}

export interface goodsReceipt {
  id: number;
  dateCreated: string;
  time: string;
  employee: string;
  carModel: string;
  invoiceForPayment: number; // Новое поле
  file: string;
  invoiceAmount: string;
}

export interface cashOrders {
  id: number;
  dateCreated: string; // Измененный тип поля
  employee: string;
  client: string;
  contractNumber: number;
  debit: string;
  credit: string;
  sum: string;
  file: string;
}

export interface acceptanceCertificate {
  id: number;
  dateCreated: string; // Тип был изменен на string
  employee: string;
  client: string;
  carModel: string;
  contractNumber: number;
  contractOfSale: number;
  remark: string;
  file: string;
}

type rowProps =
  | requestsProps
  | clientCardProps
  | autoCardProps
  | clientHistoryProps
  | prepaidInvoicesProps
  | CarSale
  | receiptProps
  | vehiclePasportProps
  | Deal
  | invoiceForPayment
  | goodsReceipt
  | cashOrders
  | acceptanceCertificate;

interface myTableProps {
  tableColumns: string[];
  tableRows: rowProps[];
  selectedElements?: boolean[];
  setSelectedElements?: (value: boolean[]) => void;
  searchValue?: string;
}

const createCell = (value: any) => {
  switch (value) {
    case 'Файл':
      return (
        <Typography
          sx={{
            textDecoration: 'underline',
            color: 'primary.main',
            fontSize: '20px',
            cursor: 'pointer',
          }}>
          {value}
        </Typography>
      );
    default:
      return value;
  }
};

const uniqueBg = [
  'Создана',
  'Ожидает согласования',
  'Согласована',
  'Создан договор',
  'Не согласована',
];

const setBg = (value: any) => {
  switch (value) {
    case 'Создана':
      return 'rgba(88, 132, 218, 0.5)';
    case 'Ожидает согласования':
      return 'rgba(255, 237, 79, 0.5)';
    case 'Согласована':
      return 'rgba(245, 108, 9, 0.5)';
    case 'Создан договор':
      return 'rgba(76, 255, 47, 0.5)';
    case 'Не согласована':
      return 'rgba(255, 0, 0, 0.54)';
  }
};

export default function MyTable({
  tableColumns,
  tableRows,
  selectedElements,
  setSelectedElements,
  searchValue,
}: myTableProps) {
  const [selected, setSelected] = React.useState(new Array(tableRows.length).fill(false));

  const searchedRows = useMemo(
    () =>
      searchValue
        ? tableRows.filter((row) =>
            Object.values(row).find((value: string | number) =>
              value.toString().toLowerCase().includes(searchValue.toLowerCase()),
            ),
          )
        : tableRows,
    [searchValue],
  );

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          mt: 10,
          ml: '70px',
          width: '1400px',
          borderRadius: '30px 30px 0 0',
          borderTop: '1px solid black',
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: '#c0c0c0',
                  fontSize: '20px',
                  border: '1px solid black',
                  borderTop: 'none',
                }}></TableCell>
              {tableColumns.map((col) => (
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
            {searchedRows.map((row, ind) => (
              <TableRow>
                <TableCell
                  sx={{
                    border: '1px solid black',
                    width: '30px',
                    bgcolor:
                      (selectedElements ? selectedElements[ind] : selected[ind]) === true
                        ? '#d9d9d9'
                        : '#f4f4f4',
                  }}>
                  <ToggleButton
                    sx={{ width: '30px', height: '30px', border: '1px solid black' }}
                    value="check"
                    selected={selectedElements ? selectedElements[ind] : selected[ind]}
                    onChange={() => {
                      setSelected(selected.map((item, index) => (index !== ind ? item : !item)));
                      if (setSelectedElements)
                        setSelectedElements(
                          selected.map((item, index) => (index !== ind ? item : !item)),
                        );
                    }}>
                    {(selectedElements ? selectedElements[ind] : selected[ind]) && <CheckIcon />}
                  </ToggleButton>
                </TableCell>
                {Object.values(row).map((value, index) => (
                  <TableCell
                    align="center"
                    sx={{
                      border: '1px solid black',
                      fontSize: '18px',
                      bgcolor:
                        uniqueBg.includes(value) && index === 5
                          ? setBg(value)
                          : (selectedElements ? selectedElements[ind] : selected[ind]) === true
                          ? '#d9d9d9'
                          : '#f4f4f4',
                    }}>
                    {createCell(value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          ml: '70px',
          width: '1399px',
          height: '56px',
          borderRadius: '0 0 30px 30px',
          bgcolor: '#c0c0c0',
          border: '1px solid black',
          borderTop: 'none',
        }}></Box>
    </>
  );
}
