import React from 'react'
import { useDispatch } from 'react-redux'
import { startGoogleLogin } from '../../context/actions/auth'
import googleLogo from '../../google.png'

export default function LoginScreen() {
    
    const dispatch = useDispatch()

    const handleGoogleSignIn = ()=> {
        dispatch(startGoogleLogin())
    }



    return (
        <main className="fluid-container d-flex justify-content-center align-items-center">
            <div className="form-container">
                <h3 className="text-center">Inicia Sesión</h3>
                <button onClick={handleGoogleSignIn} className="google">
                    <div className="icon">
                        <img src={googleLogo} alt=""/>
                    </div>
                    <span className="google-text">Inicia con google</span>
                </button>
                <form className="d-flex flex-column">
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="contraseña" />
                    <input type="submit" value="Login"/>
                </form>
                <div className="alter-link">
                    <p>¿No tienes una cuenta?</p>
                    <a href="/auth/register">Registrate</a>
                </div>
            </div>
        </main>
    )
}

