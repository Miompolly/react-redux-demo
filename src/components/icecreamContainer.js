import React from 'react'
import { connect} from 'react-redux'
import { buyIceCream } from '../redux'

function icecreamContainer (props) {
  return (
    <div>
<h2>Number of icecreams : {props.numberofIcecream}</h2>
<button onClick={props.buyIceCream}>Buy icecream</button>

    </div>
  )
}

const MapStateProps=state=>{
    return {
        numberofIcecream:state.icecream.numberofIcecream
    }
}

const MapDispatchProps=dispatch=>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(MapStateProps,MapDispatchProps) (icecreamContainer)