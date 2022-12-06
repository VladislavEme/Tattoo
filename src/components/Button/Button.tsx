import React from 'react';
import './Button.scss';

interface ButtonType {
  title: string;
  clickButton: () => void;
}
export const Button = ({ clickButton, title }: ButtonType) => {
  return (
    <button
      onClick={() => {
        clickButton();
      }}
      className='button'
    >
      {title}
    </button>
  );
};
