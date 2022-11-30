import './App.css';
import { ThemeContextProvider } from './Components/Context/ContextCreator';
import { User } from './Components/Context/futureValue/UserCreateContext';
import { Consumer } from './Components/Context/futureValue/userUseContext';
import { Box } from './Components/Context/UseContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <User>
        <Consumer />
      </User>

    </div>
  );
};

export default App;
