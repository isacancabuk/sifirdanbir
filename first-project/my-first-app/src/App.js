import './App.css'
import './components/SelectInput'

function App() {
  const cars = [
    {
      name: "Volvo",
    },
    {
      name: "Fiat",
    },
    {
      name: "Mercedes",
    },
    {
      name: "Audi",
    },
  ];

  return (
    <SelectInput />
  );
}

export default App;
