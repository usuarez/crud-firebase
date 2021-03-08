import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DashboardScreen from '../components/dashboard/DashboardScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { firebase } from '../firebase/config'
import { useDispatch } from 'react-redux';
import {login} from '../context/actions/auth'
import { startLoadProducts } from '../context/actions/products';


export const AppRouter = () => {
    
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //cuando recargamos la pagina por default el state se borra pero aun asi firebase almacena los datos de auth, el siguiente codigo hace que los datos sean persistentes sin almacenarlos en el localstorage
    
    useEffect(()=>{
        firebase.auth().onAuthStateChanged( (user)=> {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
                dispatch(startLoadProducts(user.uid))
            } else {
                setIsLoggedIn(false)
            }
        })
    }, [setIsLoggedIn])
    

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter path='/auth/login' Component={AuthRouter} isAuth={isLoggedIn || false} />
                    <PublicRouter path='/auth/register' Component={AuthRouter} isAuth={isLoggedIn || false} />
                    
                    <PrivateRouter exact path='/' Component={DashboardScreen} isAuth={isLoggedIn || false} />
                    
                </Switch>
            </div>
        </Router>
    )
}
