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
import UserCard from './DrowSingleUser';
import { Add } from '../redux/Todoslice';


export default function AddUserDialog() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("=");
  const [email, setEmail] = React.useState("=");
  const [phone, setPhone] = React.useState("=");

  const User = {
    id,
    name,
    address,
    email,
    phone
  }
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseSave = () => {
    dispatch(Add(User))
    setOpen(false);
  };
  const handleClose = () => {
    <UserCard />
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <IconButton variant="outlined" aria-label="add user">
          <AddIcon />
        </IconButton>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Now User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="address"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="phone"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setPhone(e.target.value)
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