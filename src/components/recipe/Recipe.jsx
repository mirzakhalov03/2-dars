import React from 'react'
import './recipe.scss'
import recipeImg1 from '../../assets/images/recipe1.png'
import recipeImg2 from '../../assets/images/recipe2.png'
import recipeImg3 from '../../assets/images/recipe3.png'
import recipeImg4 from '../../assets/images/recipe4.png'


const Recipe = () => {
  return (
    <div className='recipe'>
      <div className="container">
        <h2 className='recipe__title'>Over 30+ fresh recipes every week</h2>
        <p className='recipe__text'>Easy meals designed by professional chefs and nutritionists</p>
        <div className="recipe__hug">
          <img src={recipeImg1} alt="" />
          <img src={recipeImg2} alt="" />
          <img src={recipeImg3} alt="" />
          <img src={recipeImg4} alt="" />
        </div>
        <button>View Our Menus</button>
      </div>
    </div>
  )
}

export default Recipe