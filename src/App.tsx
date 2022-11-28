import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  const personList = [
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ];

  return (
    <div className="App">
      <Greet name="Darmawan" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
};

export default App;
