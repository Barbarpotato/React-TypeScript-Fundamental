import './App.css';
import { ThemeContextProvider } from './Components/Context/ContextCreator';
import { User } from './Components/Context/futureValue/UserCreateContext';
import { Consumer } from './Components/Context/futureValue/userUseContext';
import { Box } from './Components/Context/UseContext';
import { Profile } from './Components/props/compProps/Profile';
import { Private } from './Components/props/compProps/Private';
import { List } from './Components/props/genericProps/List';

function App() {

  const list = [1, 2, 3]

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <User>
        <Consumer />
      </User>

      <Profile isLogin={true} component={Private}></Profile>

      <List data={list} onClick={(list) => console.log(list)}></List>

    </div>
  );
};

export default App;
