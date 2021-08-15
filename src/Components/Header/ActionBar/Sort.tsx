import React, { FC } from 'react';

const Sort: FC<{ onSort: React.ChangeEventHandler<HTMLSelectElement> }> = ({
  onSort,
}) => {
  return (
    <div className='actionBar__sort'>
      <span className='actionBar__sortHl'>Sort by: </span>

      <select onChange={onSort}>
        <option value='title'>Title</option>
        <option value='description'>Description</option>
        <option value='email'>Email</option>
        <option value='price-asc'>Cheapest first</option>
        <option value='price-desc'>Most expensive first</option>
      </select>
    </div>
  );
};

export default Sort;
