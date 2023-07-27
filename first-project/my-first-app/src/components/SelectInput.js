function SelectInput(){
    <main>
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars">
        {cars.map((car) => (
          <option class="option">
            {car.name}
          </option>
        ))}
      </select>
    </main>
}