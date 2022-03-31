import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyles';
import AppProvider from './hooks';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
