import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';


function HookCakeContainer(props) {
    const numberofCakes=useSelector(state=>state.cake.numberofCakes);
    const dispatch=useDispatch();
  return (
    <div>
<h2>Number of cakes :{numberofCakes}</h2>
<button onClick={()=>dispatch(buyCake())}>Buy cake</button>

    </div>
  )
}

export default HookCakeContainer