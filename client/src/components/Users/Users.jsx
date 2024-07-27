import * as React from 'react';
import UserCard from './DrowSingleUser'
import AddUserDialog from './AddNewUser'
import { useDispatch, useSelector } from 'react-redux';
import { Get } from '../redux/Userslice'

export default function Users() {
    debugger
    const dispatch = useDispatch()
    dispatch(Get())
    const Useres = useSelector((state) => state.UserSlice.User );
    return (
        <>
            <h1>Users</h1>
            <AddUserDialog />
            {
                Useres?.map((t) => {
                    return (
                        <UserCard element={t} />
                    )
                })
            }

        </>
    )

}
