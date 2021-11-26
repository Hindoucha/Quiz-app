import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

const CreateQuiz = (tabToggleHandler) =>{

    const history = useNavigate()

    const [quizState, setQuizState] = useState({
        title : '',
        description : ''
    })

    const changeHandler = (e) => {
        setQuizState({...quizState, [e.target.name]: e.target.value})
        console.log(quizState)
    }

    const cancelHandler = () => {
        history('/')
    }

    return(
        <div>
            <div className="field">
                <div className="label">Title</div>
                <input name="title" type="text" className="input" placeholder="Ex : Geography quiz" onChange={changeHandler}/>
            </div>
            <div className="field">
                <div className="label">Description</div>
                <input name="description" type="text" className="input" placeholder="Ex : This is a Geography quiz about africa" onChange={changeHandler}/>
            </div>
            <button className="button is-link has-text-white mr-2">Create</button>
            <button to="/" className="button is-light ml-2" onClick={cancelHandler}>Cancel</button>
        </div>
    )
}

export default CreateQuiz