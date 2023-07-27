function SelectInput(props){
    return (
        <main>
        <label htmlFor="cars">{props.label}</label>
        <select name="cars" id="cars">
          {props.value.map((car) => (
            <option class="option">
              {car.name}
            </option>
          ))}
        </select>
      </main>
    )
}

export default SelectInput