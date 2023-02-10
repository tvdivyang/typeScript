import React, { useEffect, useState } from 'react'
import { UserServices } from '../services/UserServices';
import { IUsers } from "../models/Iusers";

interface IState {
    users: IUsers[],
    errorMsg: string
}

const Api: React.FC = () => {
    const [state, setState] = useState<IState>({
        users: [] as IUsers[],
        errorMsg: ""
    });

    useEffect(() => {
        setState({ ...state, })
        UserServices.getAllusers()
            .then((res) => setState({
                ...state, users: res.data
            }))
            .catch(err => setState({ ...state, errorMsg: err.message }));
    }, [])


    const {users,errorMsg}= state
    return (
        <div className='mb-5'>
            {errorMsg && (<p>{errorMsg}</p>)}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Api
