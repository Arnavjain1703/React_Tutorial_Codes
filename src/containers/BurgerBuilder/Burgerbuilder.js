import React,{Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/burger'
import BurgerControls from '../../components/burger/build-controls/build-controls'
const INGREDIENT_PRICE={
    salad:0.5,
    bacon:0.4,
    cheese:0.3,
    meat:1,


}
class BurgerBuilder extends Component
{
     state={
         ingredients:{
             salad:0,
             bacon:0,
             cheese:0,
             meat:0,
         },
         totalPrice:4
     }
    
     addIngredientHandler=(type)=>
     {
         const oldCount=this.state.ingredients[type];
         const updateCount= oldCount+1;
         const updatedIngredients={
             ...this.state.ingredients
         }
         updatedIngredients[type]=updateCount
         const priceAddition=INGREDIENT_PRICE[type];
         const oldPrice=this.state.totalPrice;
         const newPrice=oldPrice+priceAddition;
         this.setState({ingredients: updatedIngredients,totalPrice:newPrice})
     }
     deleteIngredientHandler=(type)=>
     {  
        const oldCount=this.state.ingredients[type];
         if(oldCount<=0)
         {
             return;
         }
        const updateCount= oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updateCount
        const priceAddition=INGREDIENT_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceAddition;
        this.setState({ingredients: updatedIngredients,totalPrice:newPrice})
     }

     render()
     {
         const disabledInfo={
             ...this.state.ingredients
         }
         for(let key in disabledInfo)
         {
            disabledInfo[key]=disabledInfo[key]<=0;
         }
         return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientDeleted={this.deleteIngredientHandler} 
                disabled={disabledInfo}
                totalPrice={this.state.totalPrice}/>
            </Aux>
         );
     }


}
export default BurgerBuilder