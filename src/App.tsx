import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './global/GlobalStyles';
import AppProvider from './hooks';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <ToastContainer />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
