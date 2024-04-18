import { configureStore, createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [
        {imgUrl: '/img/p1.jpg', id: 0, item: 'EGG LIP BALM ROSE WOODY', content: "Grapefruit ㅣ Elegant Rose ㅣ Musk", size: "5g", price: 28900, amount: 1}
    ],

    reducers: {
        addCount(state, action) {
            const idx = state.findIndex(a => a.id === action.payload)
            ++state[idx].amount;
        },
        minusCount(state, action) {
            const idx = state.findIndex(a => a.id === action.payload)
            state[idx].amount--
            if (state[idx].amount < 1) {
                alert('최소 주문 수량은 1개 입니다.');
                state[idx].amount = 1;
            }
        },
        addItem(state, action) { 
            let idx = state.findIndex(a => a.id == action.payload.id) 
            if(idx >= 0){
              if(action.payload.id === state[idx].id){
                state[idx].amount++
              }
            }else{
              state.push(action.payload)
            }
            
        },
        deleteItem(state, action) {
            const idx = state.findIndex(a => a.id === action.payload)
            alert(`'${state[idx].item}' 상품을 삭제하시겠습니까?`)
            state.splice(idx, 1)
        },
        deleteCheckItem: (state, action) => {
            state.items =state.items.filter(
                (item) => item.id !== action.payload
            )
        }
    }
});


export const { addCount, minusCount, addItem, deleteItem, deleteCheckItem } = cart.actions



export default configureStore({
    reducer: {cart:cart.reducer}
});

