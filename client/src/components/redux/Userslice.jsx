import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../../Hooks/GetHook'
import UseDelete from '../../Hooks/DeleteHook';
import UsePut from '../../Hooks/PutHook';
import UsePost from '../../Hooks/PostHook';

const initVal = {
    User: []
}
const UserSlice = createSlice({
    name: "User",
    initialState: initVal,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet();
            get('https://localhost:7290/api/Users')
            state.User = data;
        },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post('https://localhost:7290/api/Users', actions.payload)
        },
        Delete: (state, actions) => {
            const Delete = UseDelete();
            Delete('https://localhost:7290/api/Users/api/DeleteUserss/' + actions.payload.id)
        },
        Edit: (state, actions) => {
            const Put = UsePut();
            Put('https://localhost:7290/api/Users', actions.payload);
        },
    }
})
export const { Get, Add, Delete, Edit } = UserSlice.actions
export default UserSlice.reducer