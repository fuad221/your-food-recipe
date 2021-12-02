import { Axios } from "axios";
import { useState } from "react";

import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])
  
  
  const url = `https://api.edamam.com/search?q=chicken&app_id=dfd47374&app_key=e8ef43add93e5706b1eb5ac8fce6441d&from=0&to=3&calories=591-722&health=alcohol-free`

  const dataInfo = async () => {
    const res = await Axios.get(url);
    console.log(recipes);
    setRecipes(res.data.hits)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dataInfo()
  }

  return (    <div>
      <h1>
        <u> Your food recipe </u>🍰🍠
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
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