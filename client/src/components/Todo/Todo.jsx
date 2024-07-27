import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskCard from './DrowSingleTask';
import AddTaskDialog from './AddNewTask';
import { Get } from '../redux/Todoslice'

export default function Todo() {
    const dispatch = useDispatch()
    dispatch(Get())

    const Tasks = useSelector((state) => state.TaskSlice.Task);
    return (
        <>
            <h1>Tasks</h1>
            <AddTaskDialog />
            {
                Tasks?.map((t) => {
                    return (
                        <TaskCard element={t} />
                    )
                })
            }

        </>
    );
}
