import './App.css'
import SelectInput from './components/SelectInput';

function App() {
  const cars = [
    {
      name: "Volvo"
    },
    {
      name: "Fiat"
    },
    {
      name: "Mercedes"
    },
    {
      name: "Audi"
    },
  ];

  const label = "Choose a car:"

  return (
    <SelectInput value={cars} label={label}/>
  );
}

export default App;
