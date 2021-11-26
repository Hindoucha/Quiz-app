import React, { useState } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faCheck, faLock} from '@fortawesome/free-solid-svg-icons'

const Login = ({users, onSetStep}) => {

    const [error, setError] = useState('')
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
        if(error)
            setError('')
    }

    const loginClickHnadler = () => {
        if(inputs.email==='' || inputs.password==='')
            return setError('Email or password invalid')
        else {
            users.map( user => {
                if(inputs.email===user.email)
                    if(inputs.password===user.password)
                        return onSetStep(1)
                return setError('Email or password invalid')
            })
        }
    }

    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Login</h3>
                    <div className="field">
                        <label className="label">Email</label>
                        <p className="control has-icons-right has-icons-left">
                            <input type="email" name="email" className={error ? "input is-danger" : "input"} placeholder="Email" onChange={changeHandler} />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className="icon is-small is-right">
                                <FontAwesomeIcon icon= {faCheck}/>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <p className="control has-icons-right has-icons-left">
                            <input type="password" name="password" className={error ? "input is-danger" : "input"} placeholder="Password" onChange={changeHandler}/>
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                        </p>
                    </div>
                    {error && <div className="has-text-danger login-error-msg">{error}</div>}
                    <button className="button is-link is-medium is-fullwidth mt4" onClick={loginClickHnadler}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login