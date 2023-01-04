import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import UserReducer from './user/UserReducer'
const rootReducer=combineReducers(
    {
        cake:CakeReducer,
        icecream:icecreamReducer,
        user:UserReducer
    }
)
export default rootReducer 