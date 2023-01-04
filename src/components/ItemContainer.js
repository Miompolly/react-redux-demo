import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Items :{props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>

        </div>
    )
}
const mapStateProps = (state, ownProps) => {
    const itemState = ownProps.icecream
    ? state.cake.numberofCakes 
    : state.icecream.numberofIcecream
    return {
        item: itemState
    }
}

const mapDispatchProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.icecream
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyIceCream())
    return{
        buyItem:dispatchFunction
    }

}

export default connect(mapStateProps,mapDispatchProps)(ItemContainer) 