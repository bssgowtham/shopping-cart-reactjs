import Item1 from '../../Images/item1.jpg';
import Item2 from '../../Images/item2.jpg';
import Item3 from '../../Images/item3.jpg';
import Item4 from '../../Images/item4.jpg';
import Item5 from '../../Images/item5.jpg';
import Item6 from '../../Images/item6.jpg';
import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUBTRACT_QUANTITY, ADD_SHIPPING, SUBTRACT_SHIPPING } from '../cart-actions/action-types.js';

const intialState = {
    items: [{
            id: 1,
            title: 'Adidas',
            price: 87,
            img: Item1,
        },
        {
            id: 2,
            title: 'Lotto',
            price: 44,
            img: Item2,
        },
        {
            id: 3,
            title: 'Sparx',
            price: 53,
            img: Item3,
        },
        {
            id: 4,
            title: 'Nike',
            price: 99,
            img: Item4,
        },
        {
            id: 5,
            title: 'Roadstar',
            price: 36,
            img: Item5,
        },
        {
            id: 6,
            title: 'Jordan',
            price: 109,
            img: Item6,
        }
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addItem = state.items.find(item => item.id === action.id);
            let existedItem = state.addedItems.find(item => action.id === item.id);
            if (existedItem) {
                existedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + existedItem.price,
                }
            } else {
                addItem.quantity = 1
                let newTotal = state.total + addItem.price
                return {
                    ...state,
                    addedItems: [...state.addedItems, {...addItem }],
                    // addedItems: Object.assign({},state.addedItems,addItem),
                    total: newTotal,

                }
            }


        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let newItems = state.addedItems.filter(item => action.id !== item.id);
            let newTotalRemove = state.total - (itemToRemove.price * itemToRemove.quantity);
            return {
                ...state,
                addedItems: newItems,
                // addedItems: [...state.addedItems.slice(0, action.id)],
                // addedItems: [...state.addedItems],
                total: newTotalRemove
            }


        case ADD_QUANTITY:
            let addItemQuantity = state.addedItems.find(item => item.id === action.id);
            addItemQuantity.quantity += 1
            let newTotalAddQuantity = state.total + addItemQuantity.price;
            return {
                ...state,
                total: newTotalAddQuantity
            }


        case SUBTRACT_QUANTITY:
            let subItem = state.addedItems.find(item => item.id === action.id);
            if (subItem.quantity === 1) {
                let newItemsSubQuantity = state.addedItems.filter(item => item.id !== action.id);
                let newTotalSubQuantity = state.total - subItem.price;
                return {
                    ...state,
                    addedItems: newItemsSubQuantity,
                    total: newTotalSubQuantity
                }
            } else {
                subItem.quantity -= 1
                let newTotalSubQuantity = state.total - subItem.price;
                return {
                    ...state,
                    total: newTotalSubQuantity
                }
            }

        case ADD_SHIPPING:
            return {
                ...state,
                total: state.total + 10
            }

        case SUBTRACT_SHIPPING:
            return {
                ...state,
                total: state.total - 10
            }

        default:
            return state;
    }
}

export default cartReducer;