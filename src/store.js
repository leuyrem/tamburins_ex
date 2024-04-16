import { configureStore, createSlice } from '@reduxjs/toolkit';




const cart = createSlice({
    name: 'cart',
    initialState: [
        {imgUrl: '/img/perfume1.jpg', id: 0, item: 'EGG LIP BALM ROSE WOODY', content: "Grapefruit ㅣ Elegant Rose ㅣ Musk", size: "5g", price: '₩ 28,900', amount: 1},
        // {id: 2, id: 0, item: 'EGG LIP BALM ROSE WOODY', content: "Grapefruit ㅣ Elegant Rose ㅣ Musk", size: "5g", price: '₩ 28,900', amount: 1}
    ],

    reducers: {
        addCount(state, action) {
            const idx = state.findIndex((a) => {
                return a.id === action.payload
            })
            ++state[idx].amount;
        },

        sortName(state) {
            state.sort((a, b) =>
                a.item > b.item ? 1 : -1,
            );
        },
        addItem(state, action) {
            state.push(action.payload)
        },
    }
});


export const { addCount, sortName, addItem } = cart.actions

export default configureStore({
    reducer: {cart:cart.reducer}
});

