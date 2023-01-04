import { BUY_ICECREAM } from "./icecreamTypes";

const initialState={
    numberofIcecream:20
}

const icecreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
                ...state,
                numberofIcecream:state.numberofIcecream-1
            }
            default:return state
    }
}

export default icecreamReducer