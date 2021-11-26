import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
//components
import Home from './HomeComponent'
import CreateUser from './CreateUserComponent'
import CreateQuiz from './CreateQuizComponent'

const Admin = () => {

    const [toggleState, setToggleState] = useState(1)

    const tabToggleHandler = (index) => {
        setToggleState(index)
    }

    return(
        <Router>
            <div className="admin">
                <div className="tabs is-boxed is-left">
                    <ul>
                        <li onClick={()=>tabToggleHandler(1)} className={ toggleState===1 ? 'is-active' : ''}><Link to="/">Home</Link></li>
                        <li onClick={()=>tabToggleHandler(2)} className={ toggleState===2 ? 'is-active' : ''}><Link to="/createUser">Create User</Link></li>
                        <li onClick={()=>tabToggleHandler(3)} className={ toggleState===3 ? 'is-active' : ''}><Link to="/createQuiz">Create Quiz</Link></li>
                        <li onClick={()=>tabToggleHandler(4)} className={ toggleState===4 ? 'is-active' : ''}><Link to="/Logout">Logout</Link></li>
                    </ul>
                </div>
                <div className="admin-content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/createUser" element={<CreateUser tabToggleHandler={tabToggleHandler}/>}/>
                        <Route path="/createQuiz" element={<CreateQuiz tabToggleHandler={tabToggleHandler}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Admin