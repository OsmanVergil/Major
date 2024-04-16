import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  Typography,
} from '@mui/material';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import Navbar from '../components/Navbar';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import CheckIcon from '@mui/icons-material/Check';

import { Link } from 'react-router-dom';

export default function Constructor() {
  const [selectedConfiguration, setSelectedConfiguration] = useState<number>(3);

  const tableCols = ['№', 'Наименование', 'Цена'];
  const table1Rows = [
    { id: 1, name: 'Ионизатор воздуха Nano-e', price: '25000 руб' },
    { id: 2, name: 'Навигационная система', price: '20000 руб' },
    { id: 3, name: 'Подогрев рулевого колеса', price: '15000 руб' },
    { id: 4, name: 'Вентиляция сидений', price: '45000 руб' },
  ];
  const table2Rows = [
    { id: 1, name: 'Напольные коврики', price: '5700 руб' },
    { id: 2, name: 'Коврик багажника', price: '3300 руб' },
    { id: 3, name: 'Багажная сумка', price: '4500 руб' },
    { id: 4, name: 'Детское кресло Kid', price: '15000 руб' },
  ];

  const [selected1, setSelected1] = React.useState([false, true, false, true]);
  const [selected2, setSelected2] = React.useState([true, false, false, true]);

  return (
    <>
      <Navbar />
      <Stack direction={'row'} gap={12} alignItems={'center'} mb={'10px'} ml={'90px'} mt={'20px'}>
        <Typography variant="h4">Автомобиль №83</Typography>
        <Typography variant="h4">На основании заявки №111</Typography>
      </Stack>
      <Stack direction={'row'} gap={4} m={'30px 100px'} alignItems={'center'}>
        <MyButton endIcon={<SaveAltOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Сохранить
        </MyButton>
        <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Удалить
        </MyButton>
        <MyButton endIcon={<CalculateOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
          Рассчитать
        </MyButton>

        <Stack
          sx={{
            width: '320px',
            p: '10px',
            border: '1px solid black',
            borderRadius: '15px',
            backgroundColor: 'rgba(133, 181, 117, 0.72)',
          }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontWeight={600} fontSize={'18px'}>
              Итоговая стоимость:
            </Typography>
            <Typography fontWeight={600} fontSize={'18px'}>
              {2500000 + (selectedConfiguration - 1) * 500000 + 85700} руб.
            </Typography>
          </Stack>

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontWeight={600} fontSize={'18px'} mt={'10px'}>
              Сумма предоплаты:
            </Typography>
            <Typography fontWeight={600} fontSize={'18px'} mt={'10px'}>
              462855 руб.
            </Typography>
          </Stack>
        </Stack>

        <Link to="/autoCardPage">
          <MyButton
            endIcon={<KeyboardReturnOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
            Вернуться в карточку автомобиля
          </MyButton>
        </Link>
      </Stack>
      <Typography fontWeight={600} fontSize={'18px'} mb={'10px'} ml={'90px'}>
        Комплектации:
      </Typography>
      <Stack direction={'row'} gap={2} m={'0 90px 20px 90px'}>
        <Box
          sx={{
            width: '300px',
            height: '220px',
            border: selectedConfiguration === 1 ? '2.5px solid black' : '1px solid black',
            backgroundColor: selectedConfiguration === 1 ? '#e4e4e4' : 'white',
            borderRadius: '15px',
            p: '10px 20px',
            position: 'relative',
          }}>
          <ToggleButton
            sx={{
              width: '40px',
              height: '40px',
              border: '1px solid black',
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: '12px',
            }}
            value="check"
            selected={selectedConfiguration === 1}
            onChange={() => setSelectedConfiguration(1)}>
            {selectedConfiguration === 1 && <CheckIcon />}
          </ToggleButton>

          <Stack>
            <Typography>Наименование: Классик</Typography>
            <Typography>Модель двигателя: 1AZ-FE</Typography>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Мощность двигателя: 148</Typography>
              <Typography>л.с.</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Объём двигателя: 2,0 </Typography>
              <Typography> л</Typography>
            </Stack>
            <Typography>Модель КПП: AB60E</Typography>
            <Typography>
              Установленные опции: светодиодная передняя оптика и ПТФ, подогрев передних сидений
            </Typography>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography mt={'10px'} fontWeight={600}>
                Цена комплектации:
              </Typography>
              <Typography mt={'10px'} fontWeight={600}>
                2000000 руб.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: '300px',
            height: '220px',
            border: selectedConfiguration === 2 ? '2.5px solid black' : '1px solid black',
            backgroundColor: selectedConfiguration === 2 ? '#e4e4e4' : 'white',
            borderRadius: '15px',
            p: '10px 20px',
            position: 'relative',
          }}>
          <ToggleButton
            sx={{
              width: '40px',
              height: '40px',
              border: '1px solid black',
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: '12px',
            }}
            value="check"
            selected={selectedConfiguration === 2}
            onChange={() => setSelectedConfiguration(2)}>
            {selectedConfiguration === 2 && <CheckIcon />}
          </ToggleButton>

          <Stack>
            <Typography>Наименование: Стандарт</Typography>
            <Typography>Модель двигателя: 2AR-FE</Typography>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Мощность двигателя: 181</Typography>
              <Typography>л.с.</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Объём двигателя: 2,5 </Typography>
              <Typography> л</Typography>
            </Stack>
            <Typography>Модель КПП: AB60F</Typography>
            <Typography>
              Установленные опции: мультируль, подогрев электроскладывание боковых зеркал
            </Typography>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography mt={'10px'} fontWeight={600}>
                Цена комплектации:
              </Typography>
              <Typography mt={'10px'} fontWeight={600}>
                2500000 руб.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: '300px',
            height: '220px',
            border: selectedConfiguration === 3 ? '2.5px solid black' : '1px solid black',
            backgroundColor: selectedConfiguration === 3 ? '#e4e4e4' : 'white',
            borderRadius: '15px',
            p: '10px 20px',
            position: 'relative',
          }}>
          <ToggleButton
            sx={{
              width: '40px',
              height: '40px',
              border: '1px solid black',
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: '12px',
            }}
            value="check"
            selected={selectedConfiguration === 3}
            onChange={() => setSelectedConfiguration(3)}>
            {selectedConfiguration === 3 && <CheckIcon />}
          </ToggleButton>

          <Stack>
            <Typography>Наименование: Комфорт</Typography>
            <Typography>Модель двигателя: 2GR-FE</Typography>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Мощность двигателя: 249</Typography>
              <Typography>л.с.</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Объём двигателя: 3,5 </Typography>
              <Typography> л</Typography>
            </Stack>
            <Typography>Модель КПП: AC60E</Typography>
            <Typography>
              Установленные опции: датчик света, камера заднего вида, система распознавания дорожных
              знаков
            </Typography>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography mt={'10px'} fontWeight={600}>
                Цена комплектации:
              </Typography>
              <Typography mt={'10px'} fontWeight={600}>
                3000000 руб.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: '300px',
            height: '220px',
            border: selectedConfiguration === 4 ? '2.5px solid black' : '1px solid black',
            backgroundColor: selectedConfiguration === 4 ? '#e4e4e4' : 'white',
            borderRadius: '15px',
            p: '10px 20px',
            position: 'relative',
          }}>
          <ToggleButton
            sx={{
              width: '40px',
              height: '40px',
              border: '1px solid black',
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: '12px',
            }}
            value="check"
            selected={selectedConfiguration === 4}
            onChange={() => setSelectedConfiguration(4)}>
            {selectedConfiguration === 4 && <CheckIcon />}
          </ToggleButton>

          <Stack>
            <Typography>Наименование: Престиж</Typography>
            <Typography>Модель двигателя: 2GR-FE</Typography>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Мощность двигателя: 277</Typography>
              <Typography>л.с.</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography>Объём двигателя: 3,5 </Typography>
              <Typography> л</Typography>
            </Stack>
            <Typography>Модель КПП: AC60F</Typography>
            <Typography>
              Установленные опции: 4 камеры кругового обзора, проекционный дисплей, мониторинг
              слепых зон
            </Typography>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography mt={'10px'} fontWeight={600}>
                Цена комплектации:
              </Typography>
              <Typography mt={'10px'} fontWeight={600}>
                3500000 руб.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>



      <Stack direction={'row'} justifyContent={'space-between'} m={'20px 90px'}>
        <Stack>
          <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
            Список дополнительных опций:
          </Typography>
          <MyInput width="260px" />

          <TableContainer
            component={Paper}
            sx={{
              mt: 1,
              width: '600px',
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
                {table1Rows.map((row, ind) => (
                  <TableRow>
                    <TableCell
                      sx={{
                        border: '1px solid black',
                        width: '30px',
                        bgcolor: selected1[ind] === true ? '#d9d9d9' : '#f4f4f4',
                      }}>
                      <ToggleButton
                        sx={{ width: '30px', height: '30px', border: '1px solid black' }}
                        value="check"
                        selected={selected1[ind]}
                        onChange={() => {
                          setSelected1(
                            selected1.map((item, index) => (index !== ind ? item : !item)),
                          );
                        }}>
                        {selected1[ind] && <CheckIcon />}
                      </ToggleButton>
                    </TableCell>
                    {Object.values(row).map((value, index) => (
                      <TableCell
                        align="center"
                        sx={{
                          border: '1px solid black',
                          fontSize: '18px',
                          bgcolor: selected1[ind] === true ? '#d9d9d9' : '#f4f4f4',
                          fontWeight: index === 2 ? 600 : 500,
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
            sx={{
              width: '599px',
              height: '56px',
              borderRadius: '0 0 30px 30px',
              bgcolor: '#c0c0c0',
              border: '1px solid black',
              borderTop: 'none',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}>
            <Stack direction={'row'} mr={'25px'}>
              <Typography fontWeight={600} fontSize={'18px'}>
                Итого:
              </Typography>
              <Typography fontWeight={600} fontSize={'18px'} ml={'40px'}>
                65000 руб.
              </Typography>
            </Stack>
          </Stack>
        </Stack>




        <Stack>
          <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
          Список дополнительного оборудования:
          </Typography>
          <MyInput width="260px" />

          <TableContainer
            component={Paper}
            sx={{
              mt: 1,
              width: '600px',
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
                {table2Rows.map((row, ind) => (
                  <TableRow>
                    <TableCell
                      sx={{
                        border: '1px solid black',
                        width: '30px',
                        bgcolor: selected2[ind] === true ? '#d9d9d9' : '#f4f4f4',
                      }}>
                      <ToggleButton
                        sx={{ width: '30px', height: '30px', border: '1px solid black' }}
                        value="check"
                        selected={selected2[ind]}
                        onChange={() => {
                          setSelected2(
                            selected2.map((item, index) => (index !== ind ? item : !item)),
                          );
                        }}>
                        {selected2[ind] && <CheckIcon />}
                      </ToggleButton>
                    </TableCell>
                    {Object.values(row).map((value, index) => (
                      <TableCell
                        align="center"
                        sx={{
                          border: '1px solid black',
                          fontSize: '18px',
                          bgcolor: selected2[ind] === true ? '#d9d9d9' : '#f4f4f4',
                          fontWeight: index === 2 ? 600 : 500,
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
            sx={{
              width: '599px',
              height: '56px',
              borderRadius: '0 0 30px 30px',
              bgcolor: '#c0c0c0',
              border: '1px solid black',
              borderTop: 'none',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}>
            <Stack direction={'row'} mr={'25px'}>
              <Typography fontWeight={600} fontSize={'18px'}>
                Итого:
              </Typography>
              <Typography fontWeight={600} fontSize={'18px'} ml={'40px'}>
              20700 руб.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      
    </>
  );
}
