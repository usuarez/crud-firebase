import { types } from "../types/types"

export const productsReducer = (state = {list:[]}, action) => {
    switch (action.type) {
        case types.addProduct:
            return {
                ...state, 
                list: [...state.list, action.payload]
                
            }
            case types.loadProduct:
                return {
                    ...state, 
                    list: action.payload
                    
                }
            case types.setActiveProduct :
                return {
                    ...state,
                    activeProduct: action.payload
                }
            case types.clearActiveProduct :
                return {
                    ...state,
                    activeProduct: null
                }
        case types.editProduct:
            return {
                ...state,
                list: [...state.list.map(product => product.id === action.payload.id ? Object.assign(product, action.payload.newData) : product)]
            }
        case types.deleteProduct:
            return {
                ...state,
                list: [...state.list.filter(product => product.id !== action.payload)]
            }
        default:
            return state;
    }
}