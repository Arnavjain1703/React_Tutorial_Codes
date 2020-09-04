import React,{Component} from 'react'
import './build-controls.css'
import BuildControl from './build-control/build-control'
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    {label:'Bacon',type:'bacon'},


]

class BuildControls extends Component{
    render()
    {
        return (
            <div className="BuildControls">
                <p>{this.props.totalPrice}</p>
                {controls.map(ctrl=>(
                    <BuildControl disabled={this.props.disabled[ctrl.type]} added={()=>this.props.ingredientAdded(ctrl.type)} subtracted={()=>this.props.ingredientDeleted(ctrl.type)} key={ctrl.label} label={ctrl.label}/>
                ))}
            </div>
            
        )
    }
}
export default BuildControls 