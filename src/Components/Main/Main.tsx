import { FC } from 'react';

// TODO: W3C validation

// Context
import { FinalDataProvider } from './ItemsContext/FinalDataContext';

// Hooks
import { useFetchItems } from './useFetchItems';

// Components
import Content from './Items/Content';
import Message from '../Message';
import Loading from './Loading';

// Styles
import './Main.scss';

const Main: FC = () => {
  const { isLoading, isError, items } = useFetchItems();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Message message='There has been an error loading the data, please refresh to try again' />
    );
  }

  return (
    <FinalDataProvider items={items}>
      <main className='main__wrapper'>
        <Content />
      </main>
    </FinalDataProvider>
  );
};

export default Main;
