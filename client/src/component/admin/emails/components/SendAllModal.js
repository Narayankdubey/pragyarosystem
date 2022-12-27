import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from "react-redux";

import { sendAllEmail } from "../../../../store/admin-action";

export default function SendAllModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue]=useState({subject:"",text:""})

  const handleClose = () => setOpen(false);

  const onChangeHandler = ({target})=>{
    setInputValue({...inputValue,[target.name]:target.value})
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(inputValue,"value")
    dispatch(sendAllEmail(inputValue))
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Email To All Emails</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Email will be sent to all the email address present in database.
          </DialogContentText>
          <form onSubmit={onSubmitHandler}>
            <TextField
              autoFocus
              margin="dense"
              id="subject"
              label="Subject"
              name="subject"
              type="text"
              fullWidth
              variant="standard"
              onChange={onChangeHandler}
            />
            <TextField
              multiline
              margin="dense"
              id="text"
              name="text"
              label="Text"
              type="text"
              fullWidth
              variant="standard"
              onChange={onChangeHandler}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={onSubmitHandler}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}