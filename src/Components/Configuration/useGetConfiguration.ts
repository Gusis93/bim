import { useContext } from 'react';

// Context
import { ConfigurationContext } from './ConfigurationContext';

// Interfaces
import { GetConfigurationReturn } from '../../interfaces';

export const useGetConfiguration = (): GetConfigurationReturn => {
  const contextState: any = useContext(ConfigurationContext);

  if (contextState === null) {
    throw new Error(
      'useGetConfiguration must be used within a ConfigurationProvider tag'
    );
  }
  return contextState;
};
