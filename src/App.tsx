import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';

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
      <Greet name="Darmawan" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status='success' />
      <Heading>
        <h1>hmm</h1>
        <h2>hmm</h2>
      </Heading>
    </div>
  );
};

export default App;
