import { persons } from "./assets/persons";
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      {persons.map(person => {
        return <Card name={person.name} status={person.status} image={person.image} />
      })}
    </div>
  );
}

export default App;
