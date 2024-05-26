import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "@reduxjs/toolkit";
const cartSlice=createSlice(
    {
        name:'cart',
        initialState:{
            items:[],
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(actions.payload);
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