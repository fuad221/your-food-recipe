import axios from "axios";
import { useState } from "react";

import './App.css';

function App() {
  const YOUR_APP_ID = "23f03dde";
  const YOUR_APP_KEY = "c895c18e8732d949c85252e4c74ca0f5	";

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegetarian");


  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`

  const getRecipeInfo = async () => {
    var result = await axios.get(url);
    console.log(result);
    setRecipes(result.data.hits);
    console.log(result.data.hits);

  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo()
  }

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u> Your food recipe </u>🍰🍠
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>


          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}

          >
            vegetarian
          </option>


          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>


          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value="immuno-supportive "
            onClick={() => {
              setHealthLabel("immuno-supportive ");
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
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