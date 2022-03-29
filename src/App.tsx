import GlobalStyles from './global/GlobalStyles';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
