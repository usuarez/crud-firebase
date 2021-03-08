import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveProduct, startDeleteProduct } from '../../context/actions/products'


function ProductList() {
    const dispatch = useDispatch()
    const {list} = useSelector(state => state.products)
    const handleEdit = (id)=>{
        //set active product and bulk data in the form
        dispatch(setActiveProduct(id))
    }
    
    const handleDelete = (id)=> {
        dispatch(startDeleteProduct(id))
    }

    return (
        <div className="product-list-container">
            <div className="row product d-flex align-items-center">
                <h5 className="bold col-2" >Producto</h5>
                <span className="bold col-3" >Descripcion</span>
                <span className="bold col-2" >Precio</span>
                <span className="bold col-1" >Stock</span>
                <span className="bold col-2" ></span>
                <span className="bold col-2" ></span>
            </div>
            {list.map(product => (
            <div key={product.id} className="row product d-flex align-items-center">
                <h5 className="col-2" >{product.name}</h5>
                <span className="col-3" >{product.description}</span>
                <span className="col-2" >{product.price}</span>
                <span className="col-2" >{product.stock}</span>
                <div className="col-3 d-flex">
                    <button className="btn-edit"  onClick={()=>{handleEdit(product.id)}} >Editar</button>
                    <button className="btn-delete"  onClick={()=>{handleDelete(product.id)}} >Eliminar</button>

                </div>
            </div>

            ))}
        </div>
    )
}

export default ProductList
