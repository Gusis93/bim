import { useContext } from 'react';

// Context
import { FinalDataContext } from './FinalDataContext';

// Interfaces
import { DataPartial } from '../../../interfaces';

export const useGetDataContext = (): DataPartial => {
  const contextState: any = useContext(FinalDataContext);

  if (contextState === null) {
    throw new Error(
      'useGetDataContext must be used within a FinalDataProvider tag'
    );
  }
  return contextState;
};
