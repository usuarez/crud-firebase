import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startSignInEmailPassword } from '../../context/actions/auth'

export default function RegisterScreen() {
    
    const [signInData, setSignInData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e)=> {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value
        })
    }


    const dispatch = useDispatch()
    const handleSignIn = (e)=> {
        e.preventDefault()
        let {name, email, password} = signInData
        if(name !== '' && email !== '' && password !== '') {
            console.log(name, email, password)
            dispatch(startSignInEmailPassword(signInData))
        }
    }
    return (
        <main className="fluid-container d-flex justify-content-center align-items-center">
            <div className="form-container">
                <h3 className="text-center">Registrate</h3>
                
                <form onSubmit={handleSignIn} className="d-flex flex-column">
                <input name="name" onChange={handleChange} value={signInData.name} type="text" placeholder="Nombre" />
                    <input name="email" onChange={handleChange} value={signInData.email} type="text" placeholder="email" />
                    <input name="password" onChange={handleChange} value={signInData.password} type="text" placeholder="contraseña" />
                    <input type="submit" value="Registrate"/>
                </form>
                <div className="alter-link">
                    <p>¿Tienes una cuenta?</p>
                    <a href="/auth/login">Inicia sesion</a>
                </div>
            </div>
        </main>
    )
}
