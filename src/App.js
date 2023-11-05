import { useEffect, useState } from 'react';
import video from './chicken.mp4';
import './App.css';
import MyRecipesComponents from './MyRecipesComponents';
function App() {
  const[mySearch, setMySearch] = useState("");
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSubmitted, setWordSubmitted] = useState('ceasar');

  
  useEffect(()=>{
    const getRecipe = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=8aa6ff89&app_key=%20ab55457a114517c44904fddfaee3920f`)
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    }
    getRecipe();
  },[wordSubmitted])
  const myRecipeSearch = (e) =>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }
  const finalSearch = (e) =>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }
  return (
    <div>
        <div className='header'>
          <h1>My CookBook</h1>
        </div>
        <div className='container'>
          <video className='video'autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
        
        <div className='box'>
          <h2>Find a Recipe</h2>
        <div>
          <form onSubmit={finalSearch}>
            <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
          </form>
        </div>
        <div className='container'>
          <button onClick = {finalSearch}>
            Click
          </button>
        </div>
        <hr />
        <div className='scroll'>
        {myRecipes.map((element,index)=>(
          <MyRecipesComponents key={index}
          label = {element.recipe.label}
          image = {element.recipe.image}
          calories = {element.recipe.calories}
          ingredients = {element.recipe.ingredientLines}
          />
        ))}
        </div>
        </div>
        </div>
    </div>  
  );
}

export default App;
