import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: 'Counter',
    initialState : 0,
    reducers : {
        increment : (state , action) =>{
            console.log(action.payload)
            return state = state + 1
        },
            
        decrement : (state) => state - 1 
    }
})


export const {increment,decrement} = CounterSlice.actions

export default CounterSlice.reducer