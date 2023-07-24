import './App.css';
import { MyImage } from './components';

const App = (props) => {

  const name = props.name;
  const location = props.location;
  const passed = props.passed;

  return (
    <div>
      <h1 className='styles'>Styling in React</h1>
      <p className='styles'>I should be lightblue-colored text.</p>
      <h1>Welcome, {name}</h1>
      <p>Your current location is: {location}</p>
      <p>Has a diploma: {String(passed)}</p>
      <MyImage
        name="backpack" />
    </div>
  );
}

export default App;
