import { types } from "../types/types"
import {db} from '../../firebase/config'


export const startAddProduct = (product)=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth
        const doc = await db.collection(`${uid}/crud/products`).add(product)
        if(doc?.id) {
            product.id = doc.id
            dispatch(addProduct(product))
        }
    }
}

export const startLoadProducts = (uid) => {
    return async dispatch => {
        const products = await db.collection(`${uid}/crud/products`).get()
        let data = []
        products.forEach(product=>{
            data.push({
                id: product.id,
                ...product.data()
            })
            console.log(data)
        dispatch(loadProduct(data))
        })

    }
}
const loadProduct = (data)=> ({
    type: types.loadProduct,
    payload: data
})
const addProduct = (data)=> ({
    type: types.addProduct,
    payload: data
})

export const setActiveProduct = (id)=>({type: types.setActiveProduct, payload: id})
export const clearActiveProduct = ()=>({type: types.clearActiveProduct})

export const startEditProduct = (id, newData) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        await db.doc(`${uid}/crud/products/${id}`).update(newData)
        dispatch(editProduct(id, newData))
        dispatch(clearActiveProduct())
    }
}

const editProduct = (id, newData)=>({
    type:types.editProduct, 
    payload: {id, newData}
})

export const startDeleteProduct = (id) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        await db.doc(`${uid}/crud/products/${id}`).delete()
        dispatch(deleteProduct(id))
    }
}

const deleteProduct = (id)=>({
    type: types.deleteProduct,
    payload: id
})