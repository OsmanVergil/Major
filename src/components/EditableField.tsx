import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

interface editableField {
  width: string;
  defaultValue: any;
  passport?: boolean;
}

export default function EditableField({ width, defaultValue, passport }: editableField) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const inputWidth = Number(width.slice(0, 3)) - 60 + 'px';

  return (
    <>
      {!edit ? (
        passport ? (
          <Stack
            width={width}
            direction={'row'}
            sx={{
              height: '45px',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              position: 'relative',
              fontSize: '18px',
            }}>
                <Stack borderRight={'1px solid black'} height={'45px'} alignItems={'center'} justifyContent={'center'}>
                <Typography mr={'40px'} ml={'-60px'}>
                {value.slice(0, 4)}
            </Typography>
                </Stack>
            
            <Typography ml={'-20px'}>
                {value.slice(4)}
            </Typography>
            <IconButton sx={{ position: 'absolute', right: '4px' }} onClick={() => setEdit(true)}>
              <DriveFileRenameOutlineOutlinedIcon
                sx={{ color: 'black', transform: 'scale(1.2)' }}
              />
            </IconButton>
          </Stack>
        ) : (
          <Box
            width={width}
            sx={{
              height: '45px',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              fontSize: '18px',
            }}>
            {value}
            <IconButton sx={{ position: 'absolute', right: '4px' }} onClick={() => setEdit(true)}>
              <DriveFileRenameOutlineOutlinedIcon
                sx={{ color: 'black', transform: 'scale(1.2)' }}
              />
            </IconButton>
          </Box>
        )
      ) : (
        <Stack direction={'row'}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              width: inputWidth,
              height: '21px',
              padding: '12px 10px 12px 25px',
              borderRadius: '15px',
              border: '1px solid #363538',
              fontSize: '18px',
              backgroundColor: 'white',
              outline: 'none',
            }}
          />
          <IconButton onClick={() => setEdit(false)}>
            <CheckOutlinedIcon sx={{ color: 'black', transform: 'scale(1.2)' }} />
          </IconButton>
        </Stack>
      )}
    </>
  );
}
