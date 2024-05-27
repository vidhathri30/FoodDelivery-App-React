import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "@reduxjs/toolkit";
const cartSlice=createSlice(
    {
        name:'cart',
        initialState:{
            items:["burger"],
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload);
            },
            removeItem:(state,action)=>{
                state.items.pop();
            },
            clearCart:(state,action)=>{
                state.items.length=0;
            }

        }
    }
);
export default cartSlice.reducer;
export const{addItem,removeItem,clearCart}=cartSlice.actions;