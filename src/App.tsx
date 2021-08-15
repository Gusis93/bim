import { QueryClient, QueryClientProvider } from 'react-query';

// Components
import Header from './Components/Header/Header';
import { ConfigurationProvider } from './Components/Configuration/ConfigurationContext';
import Main from './Components/Main/Main';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigurationProvider>
          <Header />
          <Main />
        </ConfigurationProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
