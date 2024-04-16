import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
interface myInputProps {
  width: string;
  attributes?: any;
  value?: string;
  setValue?: (value: string) => void;
}

export default function MyInput({ attributes, width, value, setValue }: myInputProps) {
    const fullWidth = Number(width.slice(0, 3)) + 79 + 'px'

  return (
    <Box width={fullWidth} position={'relative'} display={'inline'}>
      <SearchIcon sx={{position: 'absolute', transform: 'scale(1.625)', right: '32px', top:'12px', color: '#363538'}}/>
      <input
      type='text'
      value={value}
      onChange={(e) => {if (setValue) setValue(e.target.value)}}
        {...attributes}
        style={{
          width: width,
          height: '21px',
          padding: '12px 30px',
          borderRadius: '30px',
          border: '1px solid #363538',
          fontSize: '20px',
          bgColor: '#e4e4e4',
          outline: 'none',
        }}
        placeholder="Найти..."
      />
    </Box>
  );
}
