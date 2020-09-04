import React,{Component} from 'react';
import  './build-control.css';
class BuildControl extends Component
{
    render()
    {   console.log(this.props.disabled)
        return (
            <div className="BuildControl">
                <div className="Label">
                    {this.props.label}
                </div>
                <div>
                    
                    <button onClick={this.props.subtracted} className="Less" disabled={this.props.disabled}>less</button>
                    <button onClick={this.props.added} className="More">more</button>
                </div>
            </div>
        )
    }
}
export default BuildControl