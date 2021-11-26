import React, {useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

//context
import {usersContext} from '../../../Context/usersContext'

const CreateUser = (tabToggleHandler) => {

    const {users, setUsers} = useContext(usersContext)
    const history = useNavigate();


    const [newUser, setNewUser] = useState({
        email : '',
        password : ''
    })

    useEffect(()=>{
        console.log(users)
    })

    const changeHandler = (e) => {
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }

    const createUserHandler = () => {
        newUser? setUsers([...users, newUser]) : console.log('empty field')
        history('/')
    }

    return(
        <div>
            <div className="field">
                <div className="label">Email</div>
                <div className="control">
                    <input type="text" name="email" className="input" placeholder="example: Hina Hanana" onChange={changeHandler}/>
                </div>
            </div>
            <div className="field">
                <div className="label">Password</div>
                <div className="control">
                    <input type="password" name="password" className="input" onChange={changeHandler}/>
                </div>
            </div>
            <button className="button is-link has-text-white mr-2" onClick={createUserHandler}>Create</button>
            <button className="button is-light ml-2" onClick={()=>{history('/')}}>Cancel</button>
        </div>
    )
}

export default CreateUser