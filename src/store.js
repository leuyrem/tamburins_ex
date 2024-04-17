import { configureStore, createSlice } from '@reduxjs/toolkit';




const cart = createSlice({
    name: 'cart',
    initialState: [
        {imgUrl: '/img/perfume1.jpg', id: 0, item: 'EGG LIP BALM ROSE WOODY', content: "Grapefruit ㅣ Elegant Rose ㅣ Musk", size: "5g", price: '₩ 28,900', amount: 1}
    ],

    reducers: {
        addCount(state, action) {
            const idx = state.findIndex(a => a.id === action.payload)
            ++state[idx].amount;
        },
        deleteCount(state, action) {
            const idx = state.findIndex(a => a.id === action.payload)
            state[idx].amount--
            if (state[idx].amount < 1) {
                alert('최소 주문 수량은 1개 입니다.');
                state[idx].amount = 1;
            }
        },
        addItem(state, action) {
            if(action.payload.type === 'addobj') {
                const idx = state.findIndex(a => a.id === action.payload.id)
                if(idx >= 0) {
                    state[idx].amount++;
                } else {
                    state.push(action.payload);
                }
            } else {
                state.push(action.payload)
            }
        },
        deleteItem(state, action) {
            const idx = state.findIndex(a => a.id === action.payload)
            alert(`'${state[idx].item}' 상품을 삭제하시겠습니까?`)
            state.splice(idx, 1)
        }
    }
});


export const { addCount, deleteCount, addItem, deleteItem } = cart.actions

export default configureStore({
    reducer: {cart:cart.reducer}
});

