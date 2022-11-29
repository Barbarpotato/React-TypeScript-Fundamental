import './App.css';
// import { Greet } from './Components/Greet';
// import { Person } from './Components/Person';
// import { PersonList } from './Components/PersonList';
// import { Status } from './Components/Status';
// import { Heading } from './Components/Heading';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { ChangeEvent, MouseEvent } from 'react';

function App() {

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // };

  // const personList = [
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ];

  const handleButton = (event: MouseEvent) => {
    console.log("This Message from parent Component");
  };

  const handleChange = (event: ChangeEvent) => {
    console.log(event);
  };

  return (
    <div className="App">
      <Input value={'Darmawan'} handleChange={event => handleChange(event)} />
      <Button handleClick={event => handleButton(event)} />
    </div>
  );
};

export default App;
