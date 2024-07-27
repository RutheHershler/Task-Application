import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Add } from '../redux/Postslice';
import PostCard from './DrowSinglePost'

export default function AddPostDialog() {
  const [open, setOpen] = React.useState(false);
  const [id, SetId] = React.useState(0)
  const [contant, SetContant] = React.useState("")
  const [like, SetLike] = React.useState(0)


  const Post = {
    id,
    contant,
    like
  }
  const dispatch = useDispatch()

  const handleCloseSave = () => {
    dispatch(Add(Post))
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    <PostCard />
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <IconButton variant="outlined" aria-label="add task">
          <AddIcon />
        </IconButton>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="new post"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              SetContant(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}