import './App.css';
import { ThemeContextProvider } from './Components/Context/ContextCreator';
import { Box } from './Components/Context/UseContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
