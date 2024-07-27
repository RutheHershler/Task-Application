import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditTaskDialog from './EditTask';
import { Delete,Edit } from '../redux/Todoslice';


export default function TaskCard(props) {
    const [checked, setChecked] = React.useState(true);
    const dispatch = useDispatch()

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
    const handleClickDelete = () => {
        dispatch(Delete({ id: props.element.id }))
    };
    const handleCheckboxChange = (event) => {
        console.log(checked)
        event.stopPropagation();
        setChecked(!checked);
        dispatch(Edit(props.element))
     };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={ props.element.name}
                subheader={props.element.createDate}
            >
            </CardHeader>
            <CardActions disableSpacing>
                <EditTaskDialog />
                <IconButton aria-label="delete a task"
                    onClick={handleClickDelete}
                >
                    <DeleteIcon />
                </IconButton >
                <Checkbox
                    checked={props.element.checkbox}
                    onChange={handleCheckboxChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
            </CardActions>
        </Card>
    );
}