import { useState } from "react";

import './App.css';

function App() {
  const [query, setQuery] = useState("")
  return (
    <div>
      <h1>
        <u> Your food recipe </u>🍰🍠
      </h1>
      <form className="app__searchForm">
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
        />
        <select className="app__healthLabels">
          <option
            value="vegan"

    
          >
            vegan
          </option>
          <option
            value="vegetarian"

     
          >
            vegetarian
          </option>
          <option
            value="low-sugar"

          >
            low-sugar
          </option>
          <option
            value="dairy-free"

          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "

          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"

          >
            wheat-free
          </option>
        </select>

<button type="submit" className="app__submit">Get Recipe</button>
      </form>
    </div>
  );
}

export default App;

//Application Keys: e8ef43add93e5706b1eb5ac8fce6441d

// Application ID : dfd47374