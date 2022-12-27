import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ConfirmModal from './ConfirmModal';

export default function SendAllModal({ open, setOpen }) {
  const [inputValue, setInputValue]=useState({subject:"",text:""})
  const [confirmOpen,setConfirmOpen] = useState(false)

  const handleClose = () => setOpen(false);

  const onChangeHandler = ({target})=>{
    setInputValue({...inputValue,[target.name]:target.value})
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    setConfirmOpen(true)
    // dispatch(sendAllEmail({...inputValue,socketSessionId:thisSessionId}))
    // handleClose()
  }

  return (
    <div>
      {confirmOpen && <ConfirmModal open={confirmOpen} setOpen={setConfirmOpen} inputValue={inputValue}/>}
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