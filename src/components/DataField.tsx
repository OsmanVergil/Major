import React from 'react';

interface datafield {
  value: string;
  setValue: (newValue: string) => void;
}

export default function DataField({ value, setValue }: datafield) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        width: '340px',
        height: '21px',
        padding: '12px 30px',
        border: '1px solid #363538',
        fontSize: '20px',
        backgroundColor: '#e4e4e4',
        outline: 'none',
      }}
    />
  );
}
