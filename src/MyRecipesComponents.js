function myRecipesComponents({label, image, calories, ingredients}){
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="dish"/>
            </div>
            <ul className="container list">
                {ingredients.map((ingredient, index)=>(
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
            </ul>
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
        
    )
}
export default myRecipesComponents;