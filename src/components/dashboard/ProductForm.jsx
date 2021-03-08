import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddProduct, startEditProduct } from '../../context/actions/products'

function ProductForm() {

    const [product, setProduct] = useState({})

    const {activeProduct, list} = useSelector(state => state.products)
    
    useEffect(() => {
        if(activeProduct !== null && activeProduct !== undefined) {
            let productData = list.filter(product => product.id === activeProduct)[0]
            console.log(productData)
            setProduct(productData)
        }
    }, [activeProduct,list])
    
    const handleChange = (e)=>{
        let {target} = e
        setProduct({...product, [target.name]: target.value })
    }
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        let {name, description, price, stock} = product
        if(name !== '' || description !== '' || price !== '' || stock !== '') {
            if(activeProduct !== null && activeProduct !== undefined) {
                dispatch(startEditProduct(activeProduct, product))
            } else {
                dispatch(startAddProduct(product))
            }
        }
        
        setProduct({})
    }
    return (
        <form onSubmit={handleSubmit} className="productsform d-flex justify-content-center">
            <input onChange={handleChange} value={product.name || ''} type="text" name="name" placeholder="Nombre" />
            <input onChange={handleChange} value={product.description || ''} type="text" name="description" placeholder="Descripcion" />
            <input onChange={handleChange} value={product.price || ''} type="text" name="price" placeholder="Precio" />
            <input onChange={handleChange} value={product.stock || ''} type="text" name="stock" placeholder="Cantidad" />
            <button type="submit">Guardar</button>
        </form>
    )
}

export default ProductForm
