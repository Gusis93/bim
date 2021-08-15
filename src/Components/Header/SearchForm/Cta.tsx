import { FC } from 'react';

// Interfaces
import { FormCTA } from '../../../interfaces';

const Cta: FC<FormCTA> = ({
  Icon,
  text,
  modifier,
  value,
  clickHandler,
  ...rest
}) => {
  return (
    <button
      onClick={clickHandler}
      aria-label={value}
      value={value}
      className={`searchForm__cta ${modifier ? modifier : ''}`}
      {...rest}
    >
      <span className='searchForm__cta--text'>{text}</span>
      <Icon />
    </button>
  );
};

export default Cta;
