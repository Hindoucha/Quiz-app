import { useContext } from 'react'
import * as reactboots from 'react-bootstrap'

//context
import {usersContext} from '../../../Context/usersContext'

const Home = () => {

    const {users} = useContext(usersContext)


    return(
        <>
        <h1 className="mb-5">Users</h1>
        <reactboots.Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(
                    user => 
                        <tr>
                        <td></td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td >
                            <reactboots.Button  variant="warning" className="mr-2">Edit</reactboots.Button>
                            <reactboots.Button variant="danger" className="ml-2">Delete</reactboots.Button>
                        </td>
                        </tr>
                )}
                
            </tbody>
        </reactboots.Table>
        </>
    )
}

export default Home