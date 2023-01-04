import React from 'react'
import { connect} from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
  return (
    <div>
<h2>Number of cakes : {props.numberofCakes}</h2>
<button onClick={props.buyCake}>Buy cake</button>

    </div>
  )
}

const MapStateProps=state=>{
    return {
        numberofCakes:state.cake.numberofCakes
    }
}

const MapDispatchProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(MapStateProps,MapDispatchProps) (CakeContainer)