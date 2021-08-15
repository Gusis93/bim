import { FC } from 'react';
import { InputInterface } from '../../../interfaces';

const Input: FC<InputInterface> = (props) => {
  const { id, placeholder, changeHandler, value, label, ...rest } = props;

  return (
    <input
      name={id}
      aria-label={label}
      placeholder={placeholder}
      className='searchForm__input'
      onChange={changeHandler}
      value={value}
      {...rest}
    />
  );
};

export default Input;
