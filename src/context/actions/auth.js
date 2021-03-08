import {types} from '../types/types'
import {firebase, googleAuthProvider} from '../../firebase/config'

export const startLoginEmailPassword = (data) => {
    return async dispatch => {

    }
}

export const startSignInEmailPassword = (data) => {
    return async dispatch => {
        const {email, password, name} = data
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async({user})=>{
            await user.updateProfile({displayName: name})
            console.log(user)
        }).catch(e => {console.log(e)})
    }
}

export const startGoogleLogin = () => {
    return async(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
        })
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {uid, displayName}
})

export const startLogout = ()=>{
    return async dispatch => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

const logout = () => ({
    type: types.logout
})