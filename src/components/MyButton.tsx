import { Button } from '@mui/material'
import React from 'react'

interface myButtonProps {
    children: string,
    endIcon?: any,
    onClick?: () => void,
    style?: React.CSSProperties
}

export default function MyButton({children, endIcon, onClick, style}: myButtonProps) {
    const paddings = endIcon ? '10px 16px 10px 20px' : '10px 35px'
    

  return (
    <Button endIcon={endIcon} sx={{height: '46px', p: paddings, fontSize: '18px', backgroundColor: '#e4e4e4', color: 'black', border: '1px solid black', borderRadius: '35px', textTransform: 'capitalize',}} onClick={onClick} style={style}>
        {children}
    </Button>
  )
}
