import { useReducer, createContext, FC } from 'react';

// Reducer
import { confReducer, initialState } from './reducer';

export const ConfigurationContext = createContext({});

export const ConfigurationProvider: FC = ({ children }) => {
  const [conf, dispatchConfiguration] = useReducer(
    confReducer,
    initialState
  );

  return (
    <ConfigurationContext.Provider
      value={{ conf, dispatchConfiguration }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};
