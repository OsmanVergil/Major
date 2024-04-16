import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, Stack, Typography } from '@mui/material';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import MyButton from '../components/MyButton';
import { Link } from 'react-router-dom';
import EditableField from '../components/EditableField';
import FieldWithDropdown from '../components/FieldWithDropdown';

export default function AutoCardPage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Navbar />

      <Box m={'30px 60px'}>
        <Stack direction={'row'} gap={12} alignItems={'center'} mb={'40px'}>
          <Typography variant="h4">Автомобиль №83</Typography>
          <Typography variant="h4">На основании заявки №111</Typography>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} mb={'30px'}>
          <Stack direction={'row'} gap={8} alignItems={'center'}>
            <MyButton endIcon={<SaveAltOutlinedIcon sx={{ transform: 'scale(1.5)' }} />}>
              Сохранить
            </MyButton>
            <MyButton endIcon={<DeleteOutlineIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
              Удалить
            </MyButton>
            <Button
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon sx={{ transform: 'scale(1.5)' }} />}
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
              Создать на основании
            </Button>
          </Stack>
          <Link to="/constructor">
            <MyButton
              endIcon={<SettingsOutlinedIcon sx={{ transform: 'scale(1.4)', ml: '6px' }} />}>
              Открыть конструктор комлектаций
            </MyButton>
          </Link>
        </Stack>
        <Box
          sx={{
            width: '100%',
            height: '700px',
            border: '1px solid black',
            borderRadius: '30px',
            backgroundColor: '#c0c0c0',
          }}>
          <Box p={'18px 28px'}>
            <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
              Общие данные
            </Typography>
            <Stack direction={'row'} gap={3} mb={'20px'}>
              <FieldWithDropdown width="200px" value={'Toyota'} />
              <FieldWithDropdown width="200px" value={'Camry'} />
              <FieldWithDropdown width="200px" value={'8'} />
              <FieldWithDropdown width="200px" value={'Седан'} />
              <FieldWithDropdown width="200px" value={'Бензиновый'} />
              <FieldWithDropdown width="200px" value={'Автоматическая'} />
            </Stack>
            <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
              Дополнительная информация
            </Typography>
            <Stack direction={'row'} gap={3} mb={'20px'}>
              <EditableField width="313px" defaultValue={'В'} />
              <EditableField width="313px" defaultValue={'2100 кг'} />
              <EditableField width="313px" defaultValue={'1690 кг'} />
              <EditableField width="313px" defaultValue={'Euro 5 '} />
            </Stack>
            <Stack direction={'row'} gap={2}>
              <Stack>
                <Typography fontWeight={600} fontSize={'18px'} mb={'10px'} ml={'10px'}>
                  Информация о комплектации
                </Typography>
                <Box
                  sx={{
                    width: '390px',
                    height: '220px',
                    border: '1px solid black',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    p: '10px 20px',
                  }}>
                  <Stack>
                    <Typography>Наименование: Комфорт</Typography>
                    <Typography>Модель двигателя: 2GR-FE</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography>Мощность двигателя: 249</Typography>
                      <Typography>л.с.</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography>Объём двигателя:3,5 </Typography>
                      <Typography> л</Typography>
                    </Stack>
                    <Typography>Модель КПП: AC60E</Typography>
                    <Typography>
                      Установленные опции: датчик света, камера заднего вида, система распознавания
                      дорожных знаков
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
              </Stack>

              <Stack>
                <Typography fontWeight={600} fontSize={'18px'} mb={'10px'} ml={'10px'}>
                  Список дополнительных опций
                </Typography>
                <Box
                  sx={{
                    width: '390px',
                    height: '220px',
                    border: '1px solid black',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    p: '10px 20px',
                  }}>
                  <Stack justifyContent={'space-between'} height={'225px'}>
                    <Stack>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography>-Навигационная система </Typography>
                        <Typography> Цена: 20000 руб.</Typography>
                      </Stack>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography>-Вентиляция сидений </Typography>
                        <Typography> Цена: 45000 руб.</Typography>
                      </Stack>
                    </Stack>

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
                <Stack direction={'row'} justifyContent={'space-between'} sx={{border: '1px solid black', backgroundColor: 'rgba(133, 181, 117, 0.72)', borderRadius: '15px', mt:'7px', p: '0px 10px'}}>
                    <Typography fontWeight={600} fontSize={'18px'}>
                    Итоговая стоимость: 
                      </Typography>
                      <Typography fontWeight={600} fontSize={'18px'}>
                      3085700 руб.
                      </Typography>
                </Stack>
              </Stack>

              <Stack>
                <Typography fontWeight={600} fontSize={'18px'} mb={'10px'} ml={'10px'}>
                  Список дополнительного оборудования
                </Typography>
                <Box
                  sx={{
                    width: '390px',
                    height: '220px',
                    border: '1px solid black',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    p: '10px 20px',
                  }}>
                  <Stack justifyContent={'space-between'} height={'225px'}>
                    <Stack>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography>-Напольные коврики </Typography>
                        <Typography> Цена: 5700 руб.</Typography>
                      </Stack>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography>-Детское кресло Kid  </Typography>
                        <Typography>  Цена:   15000 руб.</Typography>
                      </Stack>
                    </Stack>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography mt={'12px'} fontWeight={600} fontSize={'15px'}>
                      Цена дополнительного оборудования:
                      </Typography>
                      <Typography mt={'12px'} fontWeight={600} >
                      20700 руб.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{border: '1px solid black', backgroundColor: 'rgba(133, 181, 117, 0.72)', borderRadius: '15px', mt:'7px', p: '0px 10px'}}>
                    <Typography fontWeight={600} fontSize={'18px'}>
                    Сумма предоплаты:
                      </Typography>
                      <Typography fontWeight={600} fontSize={'18px'}>
                      462855 руб.
                      </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Typography fontWeight={600} fontSize={'18px'} mb={'10px'}>
              Дополнительная информация
            </Typography>
            <Stack direction={'row'} gap={2} mb={'10px'}>
              <EditableField width="270px" defaultValue={'XW7BZYHKX0S103321'} />
              <EditableField width="270px" defaultValue={'2020'} />
              <EditableField width="180px" defaultValue={'Финляндия'} />
              <EditableField width="270px" defaultValue={'K386276 '} />
              <EditableField width="270px" defaultValue={'XW7BKYFK709110826'} />

            </Stack>
            <Stack direction={'row'} gap={2} mb={'20px'}>
              <EditableField width="270px" defaultValue={'70 ОР 843302'} />
              <EditableField width="270px" defaultValue={'Чёрный'} />
              <Box width={'182px'}></Box>
              <EditableField width="270px" defaultValue={'Отсутствует'} />
              <EditableField width="270px" defaultValue={'Россия'} />

            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
