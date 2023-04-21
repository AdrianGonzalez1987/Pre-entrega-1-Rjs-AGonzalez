

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginScreen.scss'
import { LoginContext } from '../../context/LoginContext'

const LoginScreen = () => {
    
        //const { login, googleLogin } = useContext(LoginContext)
        
   
    //
        const {login} = useContext (LoginContext)
        

        const [values, setValues] = useState({
            email: '',
            password: ''
        })
    
        const handleChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            login(values)
        }
    return (
        <div className = "login-container">
            <div className="login">
                <h2>Login</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Tu email'
                    />

                    <input 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />

                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                    <Link to={"/register"}>Registrarme</Link>
                </form>
               
            </div>
        </div>
    )
}

export default LoginScreen