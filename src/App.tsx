import './App.css';
import { Button } from './Components/props/eventProps/Button';
import { Input } from './Components/props/eventProps/Input';
import { Container } from './Components/props/basicProps/Container';
import { ChangeEvent, MouseEvent } from 'react';

function App() {
  // ** Used by the Person Component.
  // const person = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // };

  // ** Used by the PersonList Component.
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

  const handleButton = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log("This Message from parent Component");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Container styles={{ border: '2px solid blue', padding: '25px', margin: '50px 150px 50px 150px' }}>
        <Input value={'Darmawan'} handleChange={event => handleChange(event)} />
        <Button handleClick={event => handleButton(event)} />
      </Container>
    </div>
  );
};

export default App;
