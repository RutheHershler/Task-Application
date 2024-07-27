import * as React from "react"
import { useDispatch, useSelector } from 'react-redux';
import AddPostDialog from './AddNewPost'
import PostCard from './DrowSinglePost'
import { Get } from '../redux/Postslice'

const Post = () => {
    const dispatch = useDispatch()
    dispatch(Get())

     const Posts = useSelector((state) => state.PostSlice.Post);
    return (<>
        <h1>Post</h1>
        <AddPostDialog />
        {
            Posts?.map((t) => {
                return (
                    <PostCard element={t} />
                )
            })
        }
    </>)
}
export default Post