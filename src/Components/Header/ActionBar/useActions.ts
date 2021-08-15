import React from 'react';

// Hooks
import { useGetConfiguration } from '../../Configuration/useGetConfiguration';

// Interfaces
import { UseActionsReturn } from '../../../interfaces';

export const useActions = (): UseActionsReturn => {
  const { conf, dispatchConfiguration } = useGetConfiguration();

  const onSort: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    const splitValue = value.split('-');
    const direction = splitValue[1] ? splitValue[1] : 'asc';
    const sortBy = splitValue[1] ? splitValue[0] : value;

    dispatchConfiguration({
      type: 'sort',
      payload: {
        sortBy,
        direction,
      },
    });
  };

  const displayFavs = () => {
    dispatchConfiguration({
      type: 'displayFavs',
      payload: !conf.displayFavs,
    });
  };

  return {
    onSort,
    displayFavs,
  };
};
