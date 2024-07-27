import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditUserDialog from './EditUser'
import Typography from '@mui/material/Typography';
import { Delete } from '../redux/Userslice';


export default function UserCard(props) {
    const dispatch = useDispatch()
    
    const handleClickDelete = () => {
        dispatch(Delete({ id: props.element.id }))
    };
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardHeader
                title={props.element.name}
            >
            </CardHeader>
            <Typography variant="h6" component="p">
                {props.element.address}
            </Typography>
            <Typography variant="h6" component="p">
                {props.element.email}
            </Typography>
            <Typography variant="h6" component="p">
                {props.element.phone}
            </Typography>
            <CardActions disableSpacing>
                <EditUserDialog />
                <IconButton aria-label="delete a user"
                    onClick={handleClickDelete}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}