import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface editableField {
    width: string;
    value: any;
  }

export default function FieldWithDropdown({width, value}: editableField) {
  return (
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
            <IconButton sx={{ position: 'absolute', right: '4px' }}>
              <ArrowDropDownIcon
                sx={{ color: 'black', transform: 'scale(1.2)' }}
              />
            </IconButton>
          </Box>
  )
}
