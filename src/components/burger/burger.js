import React,{Component} from 'react'
import './burger.css'
import BurgerIngredient from './burgerIngredient/burgerIngredient'
class Burger extends Component
{
    render()
    {  const transformedIngredients=Object.keys(this.props.ingredients)
        .map(igKey=>
            {
           
               
                   return [...Array(this.props.ingredients[igKey])].map((_,i)=>
               {     
                     return <BurgerIngredient type={igKey} key={igKey+i} />
                     
               })
               
                
            })
       return (
           <div className="Burger">
              <BurgerIngredient type="bread-top" />
                {transformedIngredients}
              <BurgerIngredient type="bread-bottom" />

           </div>
       )
    }
}
export default Burger;