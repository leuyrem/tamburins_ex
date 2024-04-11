import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age:20},
    reducers: {
        changeName(state){
            state.name = 'john kim'
        },
        increase(state, action){
            state.age += action.payload
        }
    }
})

export const {changeName, increase} = user.actions


const cart = createSlice({
    name: "cart",
    initialState: [
        {id:0, item:'white and black', amount:2},
        {id:1, item:'green', amount:1}
    ],
    reducers: {
        addCount(state,action){
            const idx =state.findIndex((a)=> {return a.id === action.payload})
            ++state[idx].amount;
        }, sortName(state) {
            state.sort((a,b) => 
            a.item > b.item ? 1:-1,
        );
        },
        addItem(state, action){
            state.push(action.payload)
        },
    }
})

export const {addCount, sortName, addItem} = cart.actions




export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})