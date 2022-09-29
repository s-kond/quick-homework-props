/* import { persons } from "./assets/persons"; */
import './App.css';
import Card from "./components/Card";
import { useEffect, useState } from "react";



function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");

  const apiURL = `https://rickandmortyapi.com/api/character${selected === "" ? "" : "/?status=" + selected}`

  useEffect(() => {
    console.log(apiURL);
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        setData(data.results);
      })
  }, [selected])

  function handleChange(event) {
    console.log(event.target.value)
    setSelected(event.target.value)
  }

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <select onChange={handleChange}>
        <option value="">choose status</option>
        <option value="Alive" >alive</option>
        <option value="Dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      {data.map(person => {
        return <Card id={person.id} name={person.name} status={person.status} image={person.image} />
      })}
    </div>
  );
}

export default App;
