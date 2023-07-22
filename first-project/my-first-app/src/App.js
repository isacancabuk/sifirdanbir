import './App.css'

function App() {
  const testArray = [
    {
      value: "volvo",
      name: "Volvo",
    },
    {
      value: "fiat",
      name: "Fiat",
    },
    {
      value: "mercedes",
      name: "Mercedes",
    },
    {
      value: "audi",
      name: "Audi",
    },
  ];

  return (
    <main>
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars">
        {testArray.map((item) => (
          <option class="option" key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </main>
  );
}

export default App;
