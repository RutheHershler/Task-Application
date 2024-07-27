import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../../Hooks/GetHook'
import UseDelete from '../../Hooks/DeleteHook';
import UsePut from '../../Hooks/PutHook';
import UsePost from '../../Hooks/PostHook';

const initVal = {
    Post: []
}
const PostSlice = createSlice({
    name: "Post",
    initialState: initVal,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet();
            get('https://localhost:7290/api/Post')
            state.Post = data;
        },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post('https://localhost:7290/api/Post', actions.payload)
        },
        Delete: (state, actions) => {
            const Delete = UseDelete();
            Delete('https://localhost:7290/api/Post/api/DeletePosts/' + actions.payload.id)
        },
        Edit: (state, actions) => {
            const Put = UsePut();
            Put('https://localhost:7290/api/Post', actions.payload);
        },
    }
})
export const { Get, Add, Delete, Edit } = PostSlice.actions
export default PostSlice.reducer