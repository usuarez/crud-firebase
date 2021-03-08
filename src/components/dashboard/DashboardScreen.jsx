import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../context/actions/auth'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

function DashboardScreen() {

    const {uid, name} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }


    return (
        <main className=" dashboard fluid-container">
            <div className="container">
                    <section className="col-12 product-list">
                        <h2 className="text-center">Productos Firebase</h2>
                        {!!uid && <p>Iniciaste sesion como <strong>{name}</strong> <button className="btn-logout" onClick={handleLogout}>Cerrar Sesion</button> </p>}

                        <ProductList />
                    </section>
                    <section className="col-12 product-form">
                        <ProductForm />
                    </section>
                
            </div>
        </main>
    )
}

export default DashboardScreen
