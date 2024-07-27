import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditPostDialog from './EditPost'
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from '../redux/Postslice';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PostCard(props) {
    const [cntLike, setCntLike] = React.useState(props.element.like)
    const [likeColor, setLikeColor] = React.useState("default")
    const [expanded, setExpanded] = React.useState(false);

    const dispatch = useDispatch()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handlelikeClick = () => {
        if (likeColor == "default") {
            setLikeColor("error");
            setCntLike(cntLike + 1)
        }
        else {
            setLikeColor("default")
            setCntLike(cntLike - 1)
        }
    };
    const handleClickDelete = () => {
        console.log(props);
        dispatch(Delete({ id: props.element.id }))
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <IconButton aria-label="like" color={likeColor} onClick={handlelikeClick}>
                <FavoriteIcon />
            </IconButton>
            {cntLike}
            <CardContent>
                <Typography variant="body2" color="text.secondary" >
                    {props.element.contant}
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.element.contant}
                    </Typography>
                </CardContent>
            </Collapse>
            <CardActions disableSpacing>
                <IconButton aria-label="delete a post"
                    onClick={handleClickDelete}
                >
                    <DeleteIcon />
                </IconButton>
                <EditPostDialog />
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </Card>
    );
}